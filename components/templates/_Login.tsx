import { useState } from 'react';
import styles from './_Login.module.css';

const _Login = () => {
    const [user, setUser] = useState({
        id: '',
        pw: '',
    });

    const onLogin = () => {
        // 로그인 성공시
        localStorage.setItem('user', user.id);
    };

    return (
        <div className={styles.wrap}>
            <h1>덕후어리</h1>
            <form>
                <ul>
                    <li>
                        <input
                            type="text"
                            value={user.id}
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    id: e.target.value,
                                })
                            }
                            placeholder="아이디를 입력해 주세요"
                        />
                    </li>
                    <li>
                        <input
                            type="password"
                            value={user.pw}
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    pw: e.target.value,
                                })
                            }
                            placeholder="비밀번호를 입력해 주세요"
                        />
                    </li>
                </ul>
                <button className={styles.btn_login} onClick={onLogin}>
                    로그인
                </button>
            </form>
            <div className={styles.bottom_menu}>
                <button>비밀번호 찾기</button>
                <a href="">회원가입</a>
            </div>
            <div className={styles.others}>
                <h3>간편 로그인</h3>
                <ul>
                    <li>카카오</li>
                    <li>네이버</li>
                    <li>페북</li>
                    <li>구글</li>
                </ul>
            </div>
        </div>
    );
};

export default _Login;
