import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import css from 'styled-jsx/css';
import Loading from '../components/atoms/Loading';
import Login from '../components/templates/_Login';
import Main from '../components/templates/_Main';

const style = css`
    .wrap {
        width: 100%;
    }
    .wrap main {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Home: NextPage = () => {
    const [prepareDom, setPrepareDom] = useState(false);

    useEffect(() => {
        // localStorage.clear();
        if (typeof window !== 'undefined') {
            setPrepareDom(true);
        }
    }, []);

    return (
        <>
            <div className="wrap">
                <main>{!prepareDom ? <Loading /> : localStorage.getItem('user') ? <Main /> : <Login />}</main>
            </div>
            <style jsx>{style}</style>
        </>
    );
};

export default Home;
