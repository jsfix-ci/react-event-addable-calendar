### Usage

Here's an example of basic usage:

```js
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function MyApp() {
  return (
    <div>
      <Calendar year={year}
                month={month}
                onClickCell={onClickCell}
                onClickPrevBtn={onClickPrevBtn}
                onClickNextBtn={onClickNextBtn}
                eventMap={calendarEventMap}
                config={calendarConfig}
                onClickAddEventBtn={showEventAddPopup}/>
    </div>
  );
}
```
#### Props

| Prop name               | Description                                                                                                                                                                                                                                                                                                                                                                                                                | Default value                                         | Example values                                                                                                                                                                                                                                                                                       |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| year                    | year                                                                                                                                                                                                                                                                                                                                                                                                                       | (today)                                               | 2022                                                                                                                                                                                                                                                                               |
| month                   | month                                                                                                                                                                                                                                                                                                                                                                                                                         | (today)                                               | 5                                                                                                                                                                                                                                                                                                                                                                     |
| onClickCell             | eventHandler on click cell                                                                                                                                                                                                                                                                                                                                                                                                 | n/a | `(date: number) => {console.log(number)}`                                                                                                                                                                                                                                                                                         |
| onClickPrevBtn          | eventHandler on click prev month button                                                                                                                                                                                                                                                                                                                                                                                        | n/a                                                   | `() => setMonth(month - 1)`                                                                                                                                                                                                  |
| onClickNextBtn          | eventHandler on click next month button                                                                                                                                                                                                                                                                                                                                                                                         | n/a                                               | `() => setMonth(month + 1)`                                                                                                                                                                                                                                                                               |
| eventMap                | events needed to show on calendar                                                                                                                                                                                                                                         | n/a                                                   | {id: number, name: string, time: Array<string>, memo: string}                                                                                                                                                                                               |
| config                  | calendar configs(lang, color..)                                                                                                                                                                                                 | n/a                        | {lang: 'en'}                                                                                                                                                                                                                                                                                             |
| onClickAddEventBtn      | eventHandler on click addEvent button                                                                                                                                                                                                                                                                                                       | n/a                                   | `() => showEventAddPopup();`                                                                                                                                                                                                                                                            |