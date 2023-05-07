function FormItem({ type: formType, labelText: labelText, inputText: inputText, value: value, onChange: onChange, onKeyUp: onKeyUp }) {
    return (
        <div className="row">
            <div className="col-12">
                <label className="form-label field">{labelText}</label>
            </div>
            <div className="col-12">
                <input type={formType} className="form-control" placeholder={inputText} value={value} onChange={onChange} onKeyUp={onKeyUp} required></input>
            </div>
        </div>
    );
}

export default FormItem;