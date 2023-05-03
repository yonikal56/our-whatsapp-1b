function FormItem({type: formType, labelText: labelText, inputText: inputText}) {
    return (
        <div className="row">
            <div className="col-12">
                <label className="form-label field">{labelText}</label>
            </div>
            <div className="col-12">
                <input type={formType} className="form-control" placeholder={inputText}></input>
            </div>
        </div>
    );
}

export default FormItem;