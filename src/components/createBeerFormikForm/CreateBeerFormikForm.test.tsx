import { shallow } from "enzyme";
import CreateBeerFormikForm from "./CreateBeerFormikForm";
import CreateBeerFormikFormView from "./CreateBeerFormikFormView";
import { IBeerFormik } from "../../types/Types";

const initialValues: IBeerFormik = {
  beerName: "",
  beerType: "",
  hasCorn: false,
  ingredients: "",
};

describe("CreateBeerFormikForm", () => {
  it("should render the view with the right props", () => {
    const wrapper = shallow(<CreateBeerFormikForm />);

    expect(wrapper.type()).toBe(CreateBeerFormikFormView);
    expect(wrapper.prop("initialValues")).toStrictEqual(initialValues);
  });

  it("should handle the onSubmit callback", () => {
    console.log = jest.fn();
    const resetForm = jest.fn();
    
    const wrapper = shallow(<CreateBeerFormikForm />);
    wrapper.invoke("onSubmit")(initialValues, { resetForm });

    expect(console.log).toHaveBeenCalled();
    expect(resetForm).toHaveBeenCalled();
  });
});
