
import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './IOSDatePicker.css'; // We'll create this for custom overrides

const IOSDatePicker = ({ selected, onChange, placeholderText, className }) => {
    return (
        <div className="ios-datepicker-container">
            <DatePicker
                selected={selected ? new Date(selected) : null}
                onChange={(date) => onChange(date ? date.toISOString().split('T')[0] : '')}
                dateFormat="yyyy-MM-dd"
                placeholderText={placeholderText}
                className={`ios-input w-full ${className}`}
                showPopperArrow={false}
                calendarClassName="ios-calendar"
                dayClassName={() => "ios-day"}
            />
        </div>
    );
};

export default IOSDatePicker;
