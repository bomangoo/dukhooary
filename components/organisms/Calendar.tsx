import { useState, useEffect } from 'react';
import moment from 'moment';
import styles from './Calendar.module.css';

const Calendar = () => {
    const [today, setToday] = useState(moment());

    useEffect(() => {
        // console.log(today);
    }, []);

    const weeks = ['월', '화', '수', '목', '금', '토', '일'];

    const dates = (weekNum: number) => {
        return Array(7)
            .fill(0)
            .map((data, idx) => {
                let day = today.clone().startOf('year').week(weekNum).startOf('isoWeek').add(idx, 'day');

                // 날짜별 스타일 적용
                let dateStyle = '';
                if (day.format('YYYYMMDD') === moment().format('YYYYMMDD')) {
                    dateStyle += ` ${styles.todayBox}`;
                }
                if (day.format('MM') !== moment().format('MM')) {
                    dateStyle += ` ${styles.notThisMonth}`;
                }
                if (day.weekday() === 0) {
                    dateStyle += ` ${styles.sunBox}`;
                }
                if (day.weekday() === 6) {
                    dateStyle += ` ${styles.satBox}`;
                }

                return (
                    <div className={`${styles.dateBox}${dateStyle}`} key={`date_${weekNum}_${idx}`}>
                        {day.format('D')}
                    </div>
                );
            });
    };

    const days = () => {
        let firstWeek = today.clone().startOf('month').week();
        let lastWeek = today.clone().endOf('month').week();

        let thisWeek: number = Number(lastWeek) - Number(firstWeek) + 1;

        return Array(thisWeek)
            .fill(0)
            .map((data, idx) => {
                return (
                    <div key={`weeks_${firstWeek + idx}`} className={styles.flexWeeks}>
                        {dates(firstWeek + idx)}
                    </div>
                );
            });
    };

    return (
        <div>
            <div>
                <button>이전달</button>
                <h4>{today.format('YYYY년 MM월')}</h4>
                <button>다음달</button>
            </div>
            <div className={styles.flexWeeks}>
                {weeks.map((week, idx) => {
                    return (
                        <div key={`week_${idx}`} className={styles.dateBox}>
                            {week}
                        </div>
                    );
                })}
            </div>
            <div>{days()}</div>
        </div>
    );
};

export default Calendar;
