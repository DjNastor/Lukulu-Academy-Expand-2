$ErrorActionPreference = 'Stop'

$RepositoryRoot = Split-Path -Parent $PSScriptRoot
$ArchivePath = Join-Path $RepositoryRoot 'lukulu-design-system-fixed.zip'
$DestinationRoot = Join-Path $PSScriptRoot 'source'
$ExpectedSha256 = '26f3eb0b7cc6622f028ec4b3a1cff2b01a14a9263d91c61d7a1b98a09bb9eaa6'

if (-not (Test-Path -LiteralPath $ArchivePath -PathType Leaf)) {
    throw "Archive not found: $ArchivePath"
}

$ActualSha256 = (Get-FileHash -LiteralPath $ArchivePath -Algorithm SHA256).Hash.ToLowerInvariant()
if ($ActualSha256 -ne $ExpectedSha256) {
    throw "Checksum mismatch. Expected $ExpectedSha256 but received $ActualSha256. Nothing was extracted."
}

$TemporaryRoot = Join-Path $env:TEMP ("lukulu-design-system-" + [guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path $TemporaryRoot | Out-Null

try {
    Expand-Archive -LiteralPath $ArchivePath -DestinationPath $TemporaryRoot -Force

    $ExtractedRoot = Join-Path $TemporaryRoot 'lukulu_upload'
    if (-not (Test-Path -LiteralPath $ExtractedRoot -PathType Container)) {
        throw 'The verified archive does not contain the expected lukulu_upload directory.'
    }

    if (Test-Path -LiteralPath $DestinationRoot) {
        Remove-Item -LiteralPath $DestinationRoot -Recurse -Force
    }

    New-Item -ItemType Directory -Path $DestinationRoot | Out-Null
    Copy-Item -Path (Join-Path $ExtractedRoot '*') -Destination $DestinationRoot -Recurse -Force

    Write-Host "Design system imported to: $DestinationRoot"
    Write-Host 'Next commands:'
    Write-Host "  cd `"$DestinationRoot`""
    Write-Host '  npm install'
    Write-Host '  npm run check'
}
finally {
    if (Test-Path -LiteralPath $TemporaryRoot) {
        Remove-Item -LiteralPath $TemporaryRoot -Recurse -Force
    }
}
