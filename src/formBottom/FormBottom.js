import { Link } from "react-router-dom";

function FormBottom({button: buttonText, subComment: sbc, sufComment: sfc, link}) {
    return (
        <div className="col-12">
            <button type="submit" className="btn btn-primary">{buttonText}</button>
            <label className="form-label register">{sbc} <Link to={link}>Click here</Link> {sfc}</label>
        </div>
    );
}

export default FormBottom;