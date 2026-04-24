Install-WindowsFeature AD-Domain-Services -IncludeManagementTools
Install-ADDSForest -DomainName “empresa.local” -Force
