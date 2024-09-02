import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme CSS file

const YourComponent = () => {
    const [formData, setFormData] = useState({
        startDate: new Date(),
        endDate: new Date(),
    });

    const handleSelect = (ranges) => {
        const { startDate, endDate } = ranges.selection;
        setFormData({ ...formData, startDate, endDate });
    };

    return (
        <div className="col-span-1 px-4 py-2">
            <DateRangePicker
                ranges={[{
                    startDate: formData.startDate,
                    endDate: formData.endDate,
                    key: 'selection'
                }]}
                onChange={handleSelect}
                className="w-full"
            />
        </div>
    );
};

export default YourComponent;
