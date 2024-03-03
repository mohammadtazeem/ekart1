export default function formValidationChecker(event) {
    var { name, value } = event.target
    switch (name) {
        case "name":
        case "color":
            if (value.length === 0)
                return name + " Field Must Required"
            else if (value.length < 3 || value.length > 50)
                return name + "Field must contain atlest 3 character and must be less then 50 characters"
            else
                return ""
        case "size":
            if (value.length === 0)
                return name + " Field Must Required"
            else if (value.length > 10)
                return name + "Field must contain less then 10 character"
            else
                return ""
        case "baseprice":
            if (!value)
                return name + "Field Must Required"
            else if (value.length < 1)
                return "Base Price Must Greater then 0"
            else
                return ""
        case "discount":
            if (!value)
                return name + "Field Must Required"
            else if (value < 0 && value > 100)
                return "Discount Must Greater then 0 && Less then 100"
            else
                return ""
            default:
                return""
    }
} 