export const AUTHED_USER = "AUTHED_USER";
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER";

export function setAuthedUser(id) {
  return {
    type: AUTHED_USER,
    id,
  };
}

export function removeAuthedUser() {
  return {
    type: REMOVE_AUTHED_USER,
  };
}
