import React from 'react'
import Input from './elements/Input';
import Textarea from './elements/Textarea';
import Number from './elements/Number';
import Dropdown from './elements/Dropdown';
import FileElement from './elements/FileElement';
import Checkbox from "./elements/Checkbox";
import TextEditor from './elements/TextEditor';
import Hidden from './elements/Hidden';
import Multiple from "./elements/Multiple";
import LevelDropdown from "./elements/LevelDropdown";

const Element = ({field, data}) => {
    switch (field.type) {
        case 'textarea':
            return (<Textarea field={field} data={data} />)
        case 'levelDropdown' :
            return (<LevelDropdown />)
        case 'texteditor':
            return (<TextEditor field={field} data={data} />)
        case 'number':
            return (<Number field={field} data={data} />)
        case 'dropdown':
            return (<Dropdown field={field} data={data} />)
        case 'multiple':
            return (<Multiple field={field} data={data} />)
        case 'image':
            return (<FileElement field={field} data={data} />)
        case 'pdf':
            return (<FileElement field={field} data={data} />)
        case 'boolean':
            return (<Checkbox field={field} data={data} />)
        case 'hidden':
            return (<Hidden field={field} data={data} />)
        case 'btn' :
        case 'removeBtn' :
        default:
            return (<Input field={field} data={data} />)
    }
}

export default Element