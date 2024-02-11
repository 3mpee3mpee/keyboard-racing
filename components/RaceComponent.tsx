"use client";

import { useState, useEffect } from "react";

type Props = {
    text: String;
};

export function RaceComponent(props: Props) {
    const textString: String = props.text;
    const wordsArr = textString.split(" ");
    const [currWordIndex, setCurrWordIndex] = useState(wordsArr);
    

    return(
        <div className="sm:px-12 md:px-32 lg:px-52 text-xl tracking-wider text-gray-400">
            {textString}
        </div>
    );
}
