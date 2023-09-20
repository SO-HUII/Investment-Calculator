import classes from './ResultTable.module.css';

// currency로 변환하는 포맷팅
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const ResultTable = (props) => {
    return (
        <table className={classes.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((yearData) => (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>  {/* 연도 */}
                        <td>{formatter.format(yearData.savingsEndOfYear)}</td>  {/* 연말 총 저축액 */}
                        <td>{formatter.format(yearData.yearlyInterest)}</td>  {/* 해당연도에 발생한 이자 */}
                        <td>{formatter.format(yearData.savingsEndOfYear - props.initialInvestment - yearData.yearlyContribution * yearData.year)}</td>  {/* 총 이자 */}
                        <td>{formatter.format(props.initialInvestment + yearData.yearlyContribution * yearData.year)}</td>  {/* 총 투자 자본 */}
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default ResultTable;