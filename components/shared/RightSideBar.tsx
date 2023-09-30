import { fetchSuggestUser } from "@/lib/actions/user.actions";

const RightSideBar = () => {
  const users = fetchSuggestUser(10);
  console.log("Suggested users", users);

  return (
    <>
      {/* <section className="custom-scrollbar rightsidebar">
        <div className="flex flex-1 flex-col justify-start">
          <h3 className="text-heading4-medium text-light-1">
            Suggested Communities
          </h3>
        </div>
        <div className="flex flex-1 flex-col justify-start">
          <h3 className="text-heading4-medium text-light-1">Suggested Users</h3>
        </div>
      </section> */}
    </>
  );
};

export default RightSideBar;
