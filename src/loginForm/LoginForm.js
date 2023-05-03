import FormItem from "../formItem/FormItem.js"

function LoginForm({ type: formType, labelText: labelText, inputText: inputText }) {
    return (
        <div className="col-md-6">
            <FormItem type={formType} labelText={labelText} inputText={inputText} />
        </div>
    );
}

export default LoginForm;