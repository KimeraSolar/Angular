import React, { useState } from "react"
import { describe, expect, it } from "vitest"
import { fireEvent, render, screen } from '@testing-library/react'
import CountButton from ".."

/* Wrapper for test
 * Provides the props and state manegement necessary for the test 
 */
const TestButtonWrapper = () => {
    const [counter, setCounter] = useState<number>(0);
    const addCounter = () => setCounter(counter + 1);

    return <CountButton counter={counter} onClick={addCounter} />
}

describe('CountButton component', () => {
    it('Button should render', () => {
        render(<TestButtonWrapper/>);
        const button = screen.getByRole('button', { name: /increase/i});
        expect(button).toBeInTheDocument();
    })

    it('Button should update counter', () => {
        render(<TestButtonWrapper/>);
        const button = screen.getByRole('button', { name: /increase/i});
        const counterText = screen.getByText('Counter:', {exact: false});

        fireEvent.click(button);
        expect(counterText).toHaveTextContent('1');
    })
})