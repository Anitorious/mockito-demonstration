import { mock, instance, when, anyString } from "ts-mockito";
import { IAuthenticationService } from "../../src/services/IAuthenticationService";

import Users from "../models/user/users.synthetic";
import Profiles from "../models/user/profiles.synthetic";

const serviceMock = mock<IAuthenticationService>();

when(serviceMock.signInAsync(anyString(), anyString())).thenCall(
  async (username, password) => {
    const user = Users.find(
      u => u.name === username && u.password === password
    );

    if (typeof user === "undefined") {
      throw new Error("Invalid Credentials");
    }

    const profile = Profiles.find(p => p.id === user.id);
    return profile;
  }
);

export default instance(serviceMock);
