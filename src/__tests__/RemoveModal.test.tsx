import RemoveModal, {
  RemoveModalProps,
} from "../components/modals/RemoveModal";
import { render } from "@testing-library/react";

const makeSut = (props: RemoveModalProps) => {
  return render(<RemoveModal {...props} />);
};

describe("This suit is to test the RemoveModal component", () => {
  test("Sanpshot of RemoveModal", () => {
    const { asFragment } = makeSut({
      remove: jest.fn(),
      cancel: jest.fn(),
      isOpen: true,
    });
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render correctly", () => {
    const { getByText } = makeSut({
      remove: jest.fn(),
      cancel: jest.fn(),
      isOpen: true,
    });
    expect(getByText(/I want to remove this user/)).toBeInTheDocument();
  });
});
