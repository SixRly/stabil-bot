const axios = require('axios')
const { WABinary, 
  generateMdTagPrefix } = require('@whiskeysockets/baileys')
  const jidUtils = require('@whiskeysockets/baileys/lib/WABinary/jid-utils.js');
  
  //mudar status
  let epoch = 1
const uqTagId = generateMdTagPrefix()
	const generateMessageTag = () => `${uqTagId}${epoch++}`
const query = async (node, timeoutMs) => {
  if (!node.attrs.id) {
    node.attrs.id = generateMessageTag();
  }
};


const updateProfileStatus = async(status) => {
		await query({
			tag: 'iq',
			attrs: {
				to: jidUtils.S_WHATSAPP_NET,
				type: 'set',
				xmlns: 'status'
			},
			content: [
				{
					tag: 'status',
					attrs: {},
					content: Buffer.from(status, 'utf-8')
				}
			]
		})
	}
	
	const sendNode = (frame) => {
  if (logger.level === 'trace') {
    logger.trace(binaryNodeToString(frame), 'xml send');
  }
};

	
	const sendPresenceUpdate = async (type, toJid) => {
  const me = authState.creds.me;

  if (type === 'available' || type === 'unavailable') {
    if (!me || !me.name) {
      logger.warn('no name present, ignoring presence update request...');
      return;
    }

    ev.emit('connection.update', { isOnline: type === 'available' });

    await sendNode({
      tag: 'presence',
      attrs: {
        name: me.name,
        type,
      },
    });
  } else {
    if (!me || !me.id || !toJid) {
      logger.warn('invalid parameters, ignoring presence update request...');
      return;
    }

    await sendNode({
      tag: 'chatstate',
      attrs: {
        from: me.id,
        to: toJid,
      },
      content: [
        {
          tag: type === 'recording' ? 'composing' : type,
          attrs: type === 'recording' ? { media: 'audio' } : {},
        },
      ],
    });
  }
};
//////////////////////////////


//virus

	
	// Exportando as funções
module.exports = {
  generateMessageTag,
  query,
  updateProfileStatus,
  sendPresenceUpdate,
};
