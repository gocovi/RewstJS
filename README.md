# Overview

Use this project and workflow to run raw JavaScript directly in Azure Functions. This is similar to my [RewstPS project](https://github.com/gocovi/RewstPS).

# Setup

1. Fork this repository.
1. Create a Function App in Azure. You'll want to use NodeJS 18 LTS or 20 and Linux as your operating system..
1. In your Function App in Azure, go to **Deployment Center** and connect it to the forked GitHub repository.
1. In Overview, copy your URL. We'll use this later to setup our Custom Integration. It will look like the following: https://functionappname.azurewebsites.net/api/run.
1. Navigate to your function app in Azure, then go to Overview. Under functions, click **ScriptRunner**.
1. Under Function Keys, copy your default key. We'll also be using this in the Custom Integration.
1. In Rewst, navigate to Configuration > Integrations > Custom Integrations. Add a new one called "Rewst JavaScript" and match the settings below:

    | Hostname                          	| API Key            	| Authentication Method 	| API Key Header Name 	|
    |-----------------------------------	|--------------------	|-----------------------	|---------------------	|
    | yourfunctionapp.azurewebsites.net 	| The key you copied 	| API Key               	| x-functions-key     	|

1. Import the `run-javascript.bundle.json` file as a new workflow.
1. In the `run_script` action under Advanced, you may need to add an Integration Override for your new Rewst JavaScript integration as well and then click publish.

# Usage

1. In a test work add the `Run JavaScript` subworkflow as an action.
1. For script content, enter `return { "foo": "bar" }`.
1. See your result in `RESULT.result`.