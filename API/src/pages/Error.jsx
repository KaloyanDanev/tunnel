import React from "react";

export default function Error() {
    return (
        <>
            <title>Грешка</title>
            <div className="paddingTop100">
                <h1 className="paddingTop100 w3-center">Страницата не е намерена!</h1>
                <a className="w3-center" href="/"><h3>Обратно към главната страница.</h3></a>
            </div>
        </>
    );
}