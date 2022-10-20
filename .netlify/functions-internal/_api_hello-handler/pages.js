// This file is purely to allow nft to know about these pages. 
  try {
      require.resolve('../../../.next/package.json')
        require.resolve('../../../.next/server/package.json')
        require.resolve('../../../.next/server/pages/api/hello.js')
        require.resolve('../../../.next/server/pages/webpack-api-runtime.js')
  } catch {}