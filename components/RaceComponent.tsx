"use client";

import { useState, useEffect, useRef } from 'react';

type Props = {
    text: String;
};

export function RaceComponent(props: Props) {
    const textString: String = props.text;
    const wordsArr: string[] = textString.split(' ');
    // const [currWordIndex, setCurrWordIndex] = useState<Number>(0);
    const [currCharIndex, setCurrCharIndex] = useState<number>(0);
    const [textInput, setTextInput] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            const hiddenInputElement: HTMLElement | null = document.querySelector('.hidden-input');
            const textInputArr: string[] = textInput.split(' ');
            const wordIndex: number = textInputArr.length;
            let charIndex: number = 0;

            if (e.key === 'Delete' || e.key === 'Backspace') {
                charIndex = currCharIndex && currCharIndex - 1 || 1;
            } else if (e.code === 'Space') {
                charIndex = 0;
            } else {
                charIndex = currCharIndex && currCharIndex + 1 || 1;
            }

            
            const wordElem = document.querySelector(`[data-word-index="${wordIndex}"]`);
            
            setCurrCharIndex(charIndex);
        };

        // Add event listener for keypress
        if (inputRef.current) {
            inputRef.current.addEventListener('keydown', handleKeyPress);
        }

        // Ensure the input stays focused
        const intervalId = setInterval(() => {
            if (document.activeElement !== inputRef.current) {
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }
        }, 100);

        return () => {
            // Clean up event listener and interval
            if (inputRef.current) {
                inputRef.current.removeEventListener('keydown', handleKeyPress);
            }
            clearInterval(intervalId);
        };
    }, [textInput, currCharIndex, wordsArr]);

    return (
        <div className="sm:px-12 md:px-32 lg:px-52 text-xl tracking-wider text-gray-400">
            <div className="flex flex-wrap">
                <input
                    className='hidden-input'
                    type='text'
                    value={textInput}
                    ref={inputRef}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => setTextInput(e.currentTarget.value)}
                    style={{ position: 'fixed', top: '-9999px', left: '-9999px' }}
                />

                {wordsArr.map((word, i) => <div className='flex' key={i} data-word-index={i + 1}>{word.split('').map((char, i) => <div key={i} data-char-index={i + 1}>{char}</div>)} &nbsp;</div>)}
            </div>
        </div>
    );
}
