const RPC = require('discord-rpc')

const rpc = new RPC.Client({ transport: 'ipc' })

fullClients = {
  vrc: 'Virtual Radar Client',
  euroscope: 'EuroScope',
  vstars: 'vSTARS',
  vatSys: 'vatSys',
  veram: 'vERAM',
  ivac: 'IvAc'
}

fullNetworks = {
  vatsim: 'VATSIM',
  ivao: 'IVAO'
}

const start = Date.now()

window.stopRpc = async () => { await rpc.clearActivity() }

window.setRpc = async (position, client, network) => {
  await rpc.setActivity({
    details: position,
    state: (client === 'vrc' ? 'VRC' : fullClients[client])
      + (network === 'other' ? '' : ` on ${fullNetworks[network]}`),
    startTimestamp: start,

    largeImageKey: client,
    largeImageText: fullClients[client],

    smallImageKey: network === 'other' ? undefined : network,
    smallImageText: fullNetworks[network],
  
    instance: false
  })
}

rpc.on('ready', async () => {
  console.log('Authed for user', rpc.user.username)
})

rpc.login({ clientId: '832386811383906320' })
