function HighScoresData({products}){
    return (<>
        {products.map((element)=> {
            return <div className="tableClass"> {<h2><span>High Scores: </span>{element.name}</h2>}
            {(element.scores).map((secondElement)=>{
                return <>{<table><tr><td>{secondElement.n}</td>
                <td>{secondElement.s}</td></tr></table>}</>
            })}</div>;
        })}</>
    )
}
export default HighScoresData; 