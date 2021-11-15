export namespace Messages {
  export namespace CompilationStatus {
    export const ParsingFailed = '$(thumbsdown) Parsing Failed';
    export const ResolutionFailed = '$(thumbsdown) Resolution Failed';
    export const CompilationSucceeded = '$(thumbsup) Compilation Succeeded';
    export const Verifying = '$(sync~spin) Verifying...';
    export const VerificationSucceeded = '$(thumbsup) Verification Succeeded';
    export const VerificationFailed = '$(thumbsdown) Verification Failed';

    export const Verified = '$(thumbsup) Verified';
    export const NotVerified = '$(thumbsdown) Not Verified';
  }

  export namespace Compiler {
    export const CustomArgumentsPrompt = 'Dafny Compilation Arguments';
    export const NoArgumentsGiven = 'No additional arguments given';
  }

  export namespace Installation {
    export const Error = 'An error occurred during the installation of Dafny.';
    export const Outdated = 'Your Dafny installation is outdated: ';

    export const DeprecatedMessage = 'Please update Dafny: Due to the recent growth of the Dafny extension, '
      + 'we decided to move it to the new "dafny-lang" organization. Please switch to the new release to ensure '
      + ' that you receive Dafny updates in the future.';
    export const GetLatest = 'Get latest';
    export const LatestMarketplace = 'https://marketplace.visualstudio.com/items?itemName=dafny-lang.ide-vscode';
  }

  export namespace Dotnet {
    export const NoCompatibleInstallation = 'There is no compatible dotnet runtime installed. Dafny requires the ASP.NET Core Runtime 5.0.';
    export const ChangeConfiguration = 'Change dafny.dotnetExecutablePath';
    export const VisitDownload = 'Get dotnet';
    export const DownloadUri = 'https://dotnet.microsoft.com/download/dotnet/5.0';
  }
}
