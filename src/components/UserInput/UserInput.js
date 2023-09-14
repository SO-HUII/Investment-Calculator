const UserInput = () => {
    // form 제출 처리 시 기본 값 방지 want -> event 인수 수락 -> event 발생시 react가 자동으로 전달
    const submitHandler = (event) => {
        event.preventDefault();  // 브라우저 기본 동작(페이지 재로드) 방지 및 차단 / 재로드 == react 다시 시작
        console.log("submit");
    };

    const resetHandler = () => {
        console.log("reset");
    };
    // 첫번째 식별자: 이벤트 소스인 input, 두번째 식별자: 입력된 값 value
    const inputChangeHandler = (input, value) => {
        console.log(input, value);
    };

    return (
        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    {/* 화살표 함수가 실행될 때만 inputChangeHandler() 실행 가능 */}
                    {/* 화살표 함수는 input 값이 변경될 때만 실행 */}
                    {/* 첫번째 인수: input의 식별자, 두번째 인수: 현재 입력된 값 */}
                    <input onChange={(event) => 
                        inputChangeHandler('current-savings', event.target.value)
                    } type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(event) => 
                        inputChangeHandler('yearly-contribution', event.target.value)
                    } type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input onChange={(event) => 
                        inputChangeHandler('expected-return', event.target.value)
                    } type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => 
                        inputChangeHandler('duration', event.target.value)
                    } type="number" id="duration" />
                </p>
            </div>
            <p className="actions">
                <button onClick={resetHandler} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
};

export default UserInput;