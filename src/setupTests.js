import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import Adapter from "./ReactSixteenAdapter";

configure({ adapter: new Adapter() });

export default {
  snapshotSerializers: ["enzyme-to-json/serializer"]
}
