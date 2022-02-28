import React, {useEffect, useState} from 'react';
import {CalendarEventType} from '../../types/types';

const DayCell1 = (props) => {

  const [holidayEvent, setHolidayEvent] = useState(null);
  const [scheduleEvents, setScheduleEvents] = useState([]);

  // todo 다시 바꿔보기
  useEffect(() => {
    if (props.event) {
      setScheduleEvents(props.event.filter(event => {
        if (event.type === CalendarEventType.HOLIDAY) setHolidayEvent(event);
        else return true;
      }))
    } else {
      setHolidayEvent(null);
      setScheduleEvents([]);
    }
  }, [props.event]);

  const renderItems = () => (
    scheduleEvents.map((event, idx) => (
      <div
        className="event_item"
        key={idx}
        style={{
          backgroundColor: `${CalendarEventColorMap[event.type]}`
        }}>
        {event.name}
      </div>))
  )

  const onClickCell = () => {
    if (props.day) {
      props.onClick(props.day);
      // PopupUtil.showMobileEventDetailPopup();
    }
  }

  return (
    <div className="dayCell" onClick={onClickCell}>
      <div className="dayWrapper">
        {holidayEvent ? <span className = 'holidayCellLabel'>{holidayEvent.name}</span> : <span/>}
        <span>{props.day}</span>
      </div>
      <div className="eventWrapper">
        {props.event && renderItems()}
      </div>
    </div>
  );
};

const CalendarEventColorMap = {
  HOLIDAY: '#FF4343',
  PERSONAL: '#4395FF',
  COUPLE: '#FFAB91'
}

export default DayCell1;
