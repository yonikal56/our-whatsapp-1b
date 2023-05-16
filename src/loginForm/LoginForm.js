import FormItem from "../formItem/FormItem.js"

function LoginForm({ type: formType, labelText, inputText, error }) {
    return (
        <div className="col-md-6">
            <FormItem type={formType} labelText={labelText} inputText={inputText} error={error} />
        </div>
    );
}

export default LoginForm;