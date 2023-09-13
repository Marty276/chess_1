export const Board = () => {

    const rows = [8, 7, 6, 5, 4, 3, 2, 1];
    const columns = [1, 2, 3, 4, 5, 6, 7, 8];

    return <> 
        <div className="board">
            {rows.map(
                (y) => {
                    return <div className="row" key={"row " + y}>
                        {
                            columns.map(
                                (x) => {
                                    return <div id={x.toString() + y.toString()} key={x.toString() + y.toString()} className={
                                        ((y % 2 !== 0 ?
                                            x % 2 !== 0 ? "bsq"
                                            : "wsq"
                                            : x % 2 !== 0 ? "wsq"
                                            : "bsq") + " EM" + " off")}>
                                        </div>
                                })
                        }
                    </div>
                }
            )}
        </div>
    </>
}