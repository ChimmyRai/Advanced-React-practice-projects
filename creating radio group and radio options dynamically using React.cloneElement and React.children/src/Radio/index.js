import * as React from 'react';
import './styles.css';

export const RadioGroup= ({onChange,selected,children})=>{
    const RadioOption= React.Children.map(children, (child)=> {
        return React.cloneElement(child,{
            onChange, 
            checked: child.props.value===selected,
        });
    });
    return <div className='RadioGroup'> {RadioOption}</div>;

};

export const RadioOption=({value, checked, onChange, children})=>{
    return(
        <div>
            <input type='radio' id={value} name={value} value={value} checked={checked} onChange={
                (e)=> {
                    onChange(e.target.value);
                                }
            }/>
             <label htmlFor={value}>{children}</label>
        </div>
    );


};