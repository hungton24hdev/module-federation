///<reference types="react" />
declare module "remoteApp/router" {
  export default router;
}
declare module "remoteApp/appInjector" {
  export const inject: (id: string) => void;
  export const unmount: (id: string) => void;
}
