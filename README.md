# <a name="project-name"></a>calender-carousal-react-ts

<a href="https://www.npmjs.com/package/calender-carousal-package-react-ts">
  <img alt="downloads" src="https://img.shields.io/badge/npm-v1.0.6-blue" target="_blank" />
</a>
<a href="">
  <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
</a>
<br /> <br /> 
The Calendar Carousel is a mobile-responsive element designed to highlight a chosen date and time. You may have encountered similar instances in booking web applications, where the selected dates are always kept visible to ensure a smooth user experience.

## <a name="table-of-contents"></a>Table of contents

- [Project Name](#project-name)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API](#api)
    - [Components](#components)
      - [CalendarProvider](#calendarprovider)
      - [CalendarCarousalContainer](#CalendarCarousalContainer)
    - [Hooks](#hooks)
      - [useCalendar](#use-calendar)
    - [Custom Types](#custom-types)
      - [DateType](#DateType)
      - [Formats](#formats)
      - [CardBreakpoint](#card-breakpoint)
      - [unavailableHrs](#unavailableHrs)
      - [unavailableDates](#unavailableHrs)
      - [Selected](#selected)
      - [CalendarTheme](#calendar-theme)
      - [DateRange](#date-Range)
      - [CustomStyles](#custom-styles)
    - [Utils](#utils)
      - [getDatesList](#get-dates-List)
      - [getMeanDuration](#get-Mean-Duration)
      - [getFormattedDate](#get-formatted-date)
      - [getUnavailableTime](#get-Uavailable-Time)
      - [formattedDuration](#formatted-Duration)
      - [getFormattedTime](#get-Formatted-Time)
  - [Built With](#built-with)
  - [License](#license)

## <a name="installation"></a>Installation

You can install `calender-carousal-package-react-ts
` using npm.

```sh
npm i calender-carousal-package-react-ts
```

## <a name="usage"></a>Usage

```typescript
import { CalendarProvider } from 'calender-carousal-package-react-ts'
const App = () => {
  return (
    <CalendarProvider>
      {...}
    </CalendarProvider>
  )
}

export default App
```

```typescript
import CalenderCarousalContainer from 'calender-carousal-package-react-ts'

const TestComponent = () => {
  return (
    {...}
      <CalenderCarousalContainer />
    {...}
  )
}

export default TestComponent
```

## <a name="api"></a>API

The `CalenderCarousalContainer` component can be used by wrapping it in the `CalendarProvider`, both imported from `Calender-Carousel`. All of the calendar’s state management and date logic are bundled in `useCalendar` custom hook.

## <a name="components"></a>Components&nbsp;

### <a name="calendar-provider"></a>`CalendarProvider`

| Prop         | Description                                                  | Type                                     | Default |
| :----------- | :----------------------------------------------------------- | :--------------------------------------- | :------ |
| datesRange   | The Range of dates displayed in the Carousel                 | [DateType[]](#DateType)                  |`1 Week From CurrentDay`|
| intervalStep | The minutes by which duration should increase or decrease by | [`duration`](#Duration)                  | Value of span is `15` & Unit is "Min" <br> You can choose any span <br> value with<br> avaiable units (Hrs,Mins & Days).
|              |                                                              |                                          ||
| formats      | The display format for date, time, and clock                 | [Formats](#formats)                      | Default Formats are <br> Dates :  `"DD MM YYYY"` <br>Clock :  `"12h"` <br> Time : `"hh:mm A"`
| minDuration  | Lower threshold for the duration **(in Minutes,Hours & Days)**            | [`duration`](#Duration)                  | Default value of span is `30` & Unit is `"Mins"`  | 
| maxDuration  | Upper threshold for the duration **(in Minutes,Hours & Days)**            |[`duration`](#Duration)                   | Default value of span is `180` & Unit is `"Mins"`  |
| cardsBreakponitns      | Numbers of cards per screen to be displayed        | [CardBreakpoint](#card-breakpoint)       | [Default Values of CardsBreakpoints](#defaul-card-breakpoints-values)
| unavailableDates  |You can Either give List of Clode Dates <br> or a Callback which will speicifes the <br> dates that cannot be selected|`string` \|`[Dayjs]`(https://day.js.org/) \|`(date: Dayjs) => boolean`| Default value is `Sunday`|
| unavailableHours  | Hours that should be closed                             | [unavailableHrs](#closed-hours-range)    |       `12 AM TO 2 AM`   |
| theme        | Theme for the calendar and the components within             | [CalendarTheme](#calendar-theme)         |        |

### <a name="CalendarCarousalContainer"></a>`CalendarCarousalContainer`

| Prop              | Description                                         | Type                 | Default      |
| :---------------- | :-------------------------------------------------- | :------------------- | :----------- |
| activePanels      | What panels should initially be opened              | `string \| string[]` | `['1']` |
| dateComponent     | Component that will replace the **card carousel**   | `ReactNode`          | -            |
| timeComponent     | Component that will replace the **time picker**     | `ReactNode`          | -            |
| durationComponent | Component that will replace the **duration setter** | `ReactNode`          | -            |

## <a name="hooks"></a>Hooks&nbsp;

### <a name="use-calendar"></a>`useCalendar`

This custom hook provides access to all the state values of the package, along with the functions to update the state.

| Name             | Description                                                  | Type                                     |
| :--------------- | :----------------------------------------------------------- | :--------------------------------------- |
| selected         | Selected date, time, and duration                            | [Selected](#selected)                    |
| setDate          | Function to update the selected date                         | `(date:  Dayjs) =>  void`                |
| setTime          | Function to update the selected time                         | `(time:  Dayjs) =>  void`                |
| handleIncrementClick | Function to increase the selected duration               | `(offsetValue:  duration) =>  number`    |
| handleDecrementClick | Function to decrease the selected duration               | `(offsetValue:  duration) =>  number`    |
| dateList         | The dates displayed in the carousel                          | [DateType[]](#DateType)                  |
| intervalStep     | The minutes by which duration should increase or decrease by | `number`                                 |
| formats          | The display format for date, time, and clock                 | [Formats](#formats)                      |
| minDuration      | Lower threshold for the duration **(in Minutes,Hours & Days)**            | [`duration`](#Duration)                    |
| maxDuration      | Upper threshold for the duration **(in Minutes,Hours & Days)**            | [`duration`](#Duration)                    |
| cards            | Amount of cards per screen to be displayed                   | [CardBreakpoint](#card-breakpoint)       |
| unavailableDates      | You can Either give List of Clode Dates <br> or a Callback which will speicifes the <br> dates that cannot be selected| `string` \| `[Dayjs](https://day.js.org/)` \| `(date: Dayjs) => boolean` |
| unavailableHours      | Hours that should be closed                             | [`unavailableHrs`](#unavailableHrs)  |

## <a name="custom-types"></a>Custom Types

### <a name="DateType"></a>`DateType`

Date entry with its associated information.

```typescript
type DateType = {
  date: Dayjs
  unavailable?: boolean
}
```

### <a name="formats"></a>`Formats`

Display format for the date, time and allow the selection of `12` or `24` hour format.

```ts
type Formats = {
  date: string 
  time: string 
  clock: '12h' | '24h' 
}
```
### <a name="Duration"></a>`Duration Format`

Duration format for defining time intervals.

```ts
type duration = {
  span: number;
  unit: string;
};
```
### <a name="card-breakpoint"></a>`CardBreakpoint`

Number of cards to display per slide based on the different screen sizes.

```typescript
export type CardBreakpoint = {
  xs: number 
  sm: number
  md: number
  xl: number
  xxl: number
}
```

### <a name="unavailableHrs"></a>`unavailableHrs`

Range of unavailable hours, including `start` and `end`.

```typescript

export type unavailableHrs = {
  start: number;
  end: number;
};
```
### <a name="unavailable Dates"></a>`unavailableDate`

Date that would be unavaible in Calendar
```typescript

export type unavailableDate, = {
  string|Dayjs
};
```
### <a name="selected"></a>`Selected`

```typescript
export type Selected = {
  date: Dayjs | null
  time: Dayjs | null
  duration: number 
}
```

### <a name="calendar-theme"></a>`CalendarTheme`

```typescript
type CalendarTheme = {
  isDark: boolean /**@default false */
  general?: Partial<AliasToken>
  custom?: Partial<CustomStyles>
}
```
### <a name="date-Range"></a>`DateRange`

```typescript
export type DateRange= {
  start: Dayjs 
  end: Dayjs 
  
}
```

#### <a name="custom-styles"></a>`CustomStyles`

`custom` styles allow for component-specific customization. Below are the styles that can be applied.
| Name | Description | Type |
| :--- | :--- | :--- |
| colorCardHeader | Header color for **open** date cards | `string`
| colorCardHeaderText | Text color for date card header | `string`
| colorCardBodyText | Text color for date card body | `string`
| colorButton | Color for the  duration buttons | `string`
| colorTimePicker | Color for the `TimePicker` component | `string`
| cardGap | Gap between the date cards in the carousel | `number`
| buttonBorderRadius | Border radius of buttons that update duration | `number`

### <a name="defaul-card-breakpoints-values"></a>`Default Card Breakpoints Values`

Default number of cards to display per slide based on the different screen sizes.

```typescript
export const CARD_BREAKPOINT: CardBreakpoint = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 5,
  xl: 7,
  xxl: 9,
}
```
## <a name="utils"></a>Utils

### <a name="get-dates-List"></a>`getDatesList`

_returns:_ [DateType[]](#DateType)<br />
Get a list of dates consisiting of the Range you provided as props.
| Param | Description | Type |
| :--- | :--- | :--- |
| Range | Range of Date you want to Display | `{DateRange}`(#DateRange)
| unavaiableDates | Dates that should be closed | `string` \| [Dayjs](https://day.js.org/)

### <a name="get-Mean-Duration"></a>`getMeanDuration`

_returns:_ `number`<br />
Get mean value for the Duration.
| Param | Description | Type |
| :--- | :--- | :--- |
| min | Minimum Value of Duration in min| `number`
| max | Maximum Value of Duration in min| `number`
### <a name="formatted-Duration"></a>`formattedDuration`

_returns:_ `string`<br />
Convert minutes into hour representation.
| Param | Description | Type |
| :--- | :--- | :--- |
| minutes | The duration in minutes | `number`


### <a name="get-Formatted-Time"></a>`getFormattedTime`

_returns:_ `string`<br />
Convert time to a formatted string.
| Param | Description | Type |
| :--- | :--- | :--- |
| time | The time to format | [Dayjs](https://day.js.org/) \| `null`
| format | The format to return | `string`

### <a name="get-Uavailable-Time"></a>`getUnavailableTime`

_returns:_ `[number]`<br />
Get Unvailable  hours 
| Param | Description | Type |
| :--- | :--- | :--- |
| {[Unavailable Hours](#unavailableHrs)} | Hours that are unavailable | `null`


## <a name="built-with"></a>Built Using

- React + TypeScript using [Vite](https://vitejs.dev/)
- [Dayjs](https://day.js.org/)
- [Ant Design](https://ant.design/)

## <a name="built-with"></a>License

Copyright © 2023 [Muhammad Talha](https://github.com/islamtalha01).<br />




 
