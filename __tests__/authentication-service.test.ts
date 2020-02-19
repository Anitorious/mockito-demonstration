import AuthenticationService from "../__synthetic__/services/AuthenticationService.synth";

describe("Attempting to sign in", () => {
  test("with valid credentials, returns a user profile", async () => {
    const profile = await AuthenticationService.signInAsync(
      "sterling.archer",
      "GUEST"
    );
    expect(profile.id).toBe("c552403f-b2bf-4237-9599-22696104eb63");
  });

  test("with invalid credentials, should throw", async () => {
    expect(
      AuthenticationService.signInAsync("cheryl.tunt", "glueup")
    ).rejects.toThrowError("Invalid Credentials");
  });
});
