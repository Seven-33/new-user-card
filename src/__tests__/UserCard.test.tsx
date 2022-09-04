import UserCard, { UserCardProps } from "../components/cards/UserCard";
import { render } from "@testing-library/react";

const makeSut = (props: UserCardProps) => {
  return render(
    <UserCard
      user={props.user}
      loading={props.loading}
      favorite={jest.fn()}
      remove={jest.fn()}
      edit={jest.fn()}
    ></UserCard>
  );
};

describe("This suit is to test the UserCard component", () => {
  test("Snapshot of UserCard", () => {
    const { asFragment } = makeSut({
      user: {
        id: 0,
        name: "Alexander",
        avatar: "",
        email: "alexander@gmail.com",
        phone: "+1 951 223 5053",
        website: "alexander.com.vn",
        favorite: false,
      },
      loading: false,
      favorite: jest.fn(),
      remove: jest.fn(),
      edit: jest.fn(),
    });
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render correctly", () => {
    const { getByText, getByTestId } = makeSut({
      user: {
        id: 0,
        name: "Alexander",
        avatar: "",
        email: "alexander@gmail.com",
        phone: "+1 951 223 5053",
        website: "alexander.com.vn",
        favorite: false,
      },
      loading: false,
      favorite: jest.fn(),
      remove: jest.fn(),
      edit: jest.fn(),
    });
    expect(getByText(/Alexander/)).toBeInTheDocument();
    expect(getByText(/alexander@gmail.com/)).toBeInTheDocument();
    expect(getByText("+1 951 223 5053")).toBeInTheDocument();
    expect(getByText("http://alexander.com.vn")).toBeInTheDocument();
    getByTestId("favorite-not-checked");
    getByTestId("edit-button");
    getByTestId("remove-button");
  });

  // test.only("Should fire favorite when user clicked favorite button", async () => {
  //   const { getByTestId } = makeSut({
  //     user: {
  //       id: 0,
  //       name: "Alexander",
  //       avatar: "",
  //       email: "alexander@gmail.com",
  //       phone: "+1 951 223 5053",
  //       website: "alexander.com.vn",
  //       favorite: false,
  //     },
  //     loading: false,
  //     favorite: jest.fn(),
  //     remove: jest.fn(),
  //     edit: jest.fn(),
  //   });

  //   const heartCheckbox = getByTestId("favorite-not-checked");
  //   userEvent.click(heartCheckbox);
  //   await waitFor(() => {
  //     getByTestId("favorite-checked");
  //   });
  // });
});
