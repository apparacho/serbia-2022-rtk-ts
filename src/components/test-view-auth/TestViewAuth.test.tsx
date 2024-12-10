import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { TestViewAuth } from './TestViewAuth';

test('renders learn react link', async () => {
    const { getByText, debug, container, findByTestId } = render(
        <Provider store={store}>
            <TestViewAuth />
        </Provider>
    );

    // debug();
    // const loginBtn = container.querySelector('.test-view-auth__login-btn');
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const loginBtn = getByText(/Login/i);
    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
    const content = document.querySelector('.test-view-auth__content');
    console.log(loginBtn.textContent);
    fireEvent.click(loginBtn);

    await waitFor(() => { expect(content).toHaveTextContent(/Вы авторизованы/i); });

    // expect(content).toHaveTextContent(/Вы авторизованы/i);

    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).toHaveTextContent('Login');
});