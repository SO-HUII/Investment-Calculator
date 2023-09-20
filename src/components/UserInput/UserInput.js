import { useState } from "react";
import classes from './UserInput.module.css';

// 해당 상수는 컴포넌트 함수가 실행될 때마다 다시 만들어질 필요X -> 컴포넌트 함수 외부에
const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10,
}

const UserInput = (props) => {
    const [userInput, setUserInput]= useState(initialUserInput);

    // form 제출 처리 시 기본 값 방지 want -> event 인수 수락 -> event 발생시 react가 자동으로 전달
    const submitHandler = (event) => {
        event.preventDefault();  // 브라우저 기본 동작(페이지 재로드) 방지 및 차단 / 재로드 == react 다시 시작
        
        props.onCalculate(userInput);
    };

    const resetHandler = () => {
        setUserInput(initialUserInput);
    };
    // 첫번째 식별자: 이벤트 소스인 input, 두번째 식별자: 입력된 값 value
    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            // 새로운 상태 반환
            return {
                ...prevInput,
                // 네 가지 프로퍼티 중 하나를 input에 저장된 내용에 따라 값으로 설정.
                // 상태 객체 동적으로 update
                [input]: +value,  // +는 문자열 값을 숫자로 변환하는 역할
            };
        });
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    {/* 화살표 함수가 실행될 때만 inputChangeHandler() 실행 가능 */}
                    {/* 화살표 함수는 input 값이 변경될 때만 실행 */}
                    {/* 첫번째 인수: input의 식별자, 두번째 인수: 현재 입력된 값 */}
                    <input onChange={(event) => 
                        inputChangeHandler('current-savings', event.target.value)
                    } value={userInput['current-savings']} type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(event) => 
                        inputChangeHandler('yearly-contribution', event.target.value)
                    } value={userInput['yearly-contribution']} type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input onChange={(event) => 
                        inputChangeHandler('expected-return', event.target.value)
                    } value={userInput['expected-return']} type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => 
                        inputChangeHandler('duration', event.target.value)
                    } value={userInput.duration} type="number" id="duration" />
                </p>
            </div>
            <p className={classes.actions}>
                <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
            </p>
        </form>
    )
};

export default UserInput;