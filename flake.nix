{
  description = "The Byte Life";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils }:
    utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        Medieval = "ignore";
      in
      {
        # Defines your localized environment
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
            pnpm
          ];

          shellHook = ''
            echo "Welcome to your isolated project environment!"
          '';
        };
      });
}
