import React from 'react';
import DayCell1 from './DayCell/DayCell1';
import {Language} from '../types/types';

const dateToString = (year, month, day)  => {
  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
}

const Calendar1 = (props) => {
  const startDay = new Date(props.year, props.month, 1).getDay();
  const totalDay = new Date(props.year, props.month + 1, 0).getDate();

  const lang = props.config?.lang ? props.config.lang : Language.ko;

  //todo useCallback 왜 안되는지???
  const renderWeekdayRow = () => {
    const weekdaysKo = ['일', '월', '화', '수', '목', '금', '토'];
    const weekdaysEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekdays = lang === Language.en ? weekdaysEn : weekdaysKo;

    return (
      <div className="weekdayRow">
        {weekdays.map((weekday, index) => (
          <div className="weekDayCell" key={index}>{weekday}</div>
        ))}
      </div>
    );
  }

  // TODO 하나 DayCell만 update하게 최적화 하기
  // TODO cell render 로직 최적화 하기
  const renderWeekRows = () => {
    // DayCell에 넘겨주는 data
    let dayCount = 0;
    // DayCell에 일 표기 데이터 넘겨줄 지
    let isValidCell = false;
    return (
      // 6주
      [0, 1, 2, 3, 4, 5].map((row) => (
        <div className="weekRow" key={row}>
          {[0, 1, 2, 3, 4, 5, 6].map((column, idx) => {
            if (dayCount === totalDay) isValidCell = false;
            if (row === 0 && column === startDay) isValidCell = true;
            if (isValidCell) dayCount++;
            return <DayCell1 day={isValidCell ? dayCount : null} key={idx} event={isValidCell ? props.eventMap?.get(dateToString(props.year, props.month + 1, dayCount)) : null} onClick={props.onClickCell}
            />;
          })}
        </div>
      ))
    );
  }

  return (
    <section className="section_calendar">
      <section className="function_menu">
        <div className="calendar_submenu">
          <div className="calendar_controller">
            {/*TODO SVG로 바꿔보기*/}
            <button onClick={props.onClickPrevBtn}>left</button>
            <button onClick={props.onClickNextBtn}>right</button>
            <button onClick={props.onClickAddEventBtn} className="add_event">
              일정 추가
            </button>
          </div>
          <div className="date_shower">{props.year}년 {props.month + 1}월</div>
        </div>
      </section>
      <section className="main_container">
        <div className="calendar">
          {renderWeekdayRow()}
          {renderWeekRows()}
        </div>
      </section>
    </section>
  );
};

export default Calendar1;
