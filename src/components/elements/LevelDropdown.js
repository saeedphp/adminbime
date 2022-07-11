import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../config/Config';

const LevelDropdown = () => {

    return (
        <select className='form-select' name="accessLevel" id="accesslevel">
            <option>انتخاب</option>
            <option value="500">پرسنل</option>
            <option value="400">نماینده</option>
        </select>
    )
}

export default LevelDropdown;