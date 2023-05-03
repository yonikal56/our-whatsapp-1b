import FormItem from "../formItem/FormItem.js"

function RegisterForm({ type: formType, labelText: labelText, inputText: inputText }) {
    return (
        <div className="col-md-6 mb-3">
            <FormItem type={formType} labelText={labelText} inputText={inputText} />
        </div>
    );
}

export default RegisterForm;
