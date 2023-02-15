/* eslint-disable */
// App template factory Contract
const TEMPLATE_FACTORY = {
  ADDRESS: '0x40390748890105F65e42A0FE49348EbE6de7c061',
  ABI: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'OwnershipTransferred',
      type: 'event'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_appContract',
          type: 'address'
        },
        {
          internalType: 'address[]',
          name: '_templates',
          type: 'address[]'
        },
        {
          internalType: 'bool',
          name: '_isTemplate',
          type: 'bool'
        },
        {
          internalType: 'string',
          name: '_name',
          type: 'string'
        },
        {
          internalType: 'string[]',
          name: '_image',
          type: 'string[]'
        },
        {
          internalType: 'bool',
          name: '_isExpanded',
          type: 'bool'
        },
        {
          internalType: 'uint256',
          name: 'totalPrice',
          type: 'uint256'
        },
        {
          internalType: 'uint64',
          name: 'duration',
          type: 'uint64'
        },
        {
          internalType: 'uint256[][]',
          name: '_tokenNeed',
          type: 'uint256[][]'
        },
        {
          internalType: 'string',
          name: '_pic',
          type: 'string'
        }
      ],
      name: 'deployApp',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_templateType',
          type: 'uint256'
        },
        {
          internalType: 'string[]',
          name: '_info',
          type: 'string[]'
        },
        {
          internalType: 'uint256[]',
          name: '_infoC',
          type: 'uint256[]'
        },
        {
          internalType: 'string',
          name: '_name',
          type: 'string'
        },
        {
          internalType: 'string',
          name: '_image',
          type: 'string'
        }
      ],
      name: 'deployTemplate',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getAllTemplateApp',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getAllTemplateTem',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getAllUbq',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address'
        }
      ],
      name: 'getAppContract',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getAppGas',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_appContract',
          type: 'address'
        }
      ],
      name: 'getAppUseInfo',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'templateAddress',
          type: 'address'
        }
      ],
      name: 'getHardwareCountByAddress',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'cpuC_',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'ipC_',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'gpuC_',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'storageC_',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'memC_',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'bandWidthC_',
              type: 'uint256'
            }
          ],
          internalType: 'struct AppFactory.HardwareCount',
          name: '',
          type: 'tuple'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'templateAddress',
          type: 'address'
        }
      ],
      name: 'getHardwareInfoByAddress',
      outputs: [
        {
          components: [
            {
              internalType: 'string',
              name: 'cpu_',
              type: 'string'
            },
            {
              internalType: 'string',
              name: 'ip_',
              type: 'string'
            },
            {
              internalType: 'string',
              name: 'gpu_',
              type: 'string'
            },
            {
              internalType: 'string',
              name: 'storage_',
              type: 'string'
            },
            {
              internalType: 'string',
              name: 'mem_',
              type: 'string'
            },
            {
              internalType: 'string',
              name: 'bandwidth_',
              type: 'string'
            }
          ],
          internalType: 'struct AppFactory.HardwareInfo',
          name: '',
          type: 'tuple'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getTempGas',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'templateId',
          type: 'uint256'
        }
      ],
      name: 'getTemplateAddressById',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address'
        }
      ],
      name: 'getTemplateContract',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getTemplateCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'templateAddress',
          type: 'address'
        }
      ],
      name: 'getTemplateOwner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_templateAddress',
          type: 'address'
        },
        {
          internalType: 'bool',
          name: '_isTemplate',
          type: 'bool'
        }
      ],
      name: 'setAppTemplate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_appGas',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: '_tempGas',
          type: 'uint256'
        }
      ],
      name: 'setGas',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_templateAddress',
          type: 'address'
        },
        {
          internalType: 'bool',
          name: '_isTemplate',
          type: 'bool'
        }
      ],
      name: 'setTemTemplate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_tradeAddress',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'tokenAddress',
          type: 'address'
        }
      ],
      name: 'setTradeAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ]
}

const POOL_OF_CAPITAL = {
  ADDRESS: '0x827F2E3dCCC405FE0447C743B3c30692dcb39d53',
  ABI: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'OwnershipTransferred',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'Paused',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'Unpaused',
      type: 'event'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addr',
          type: 'address'
        }
      ],
      name: 'getAllInfo',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'deposit_amount',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'stake_creation_time',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'last_upload_time',
              type: 'uint256'
            },
            {
              internalType: 'bool',
              name: 'returned',
              type: 'bool'
            },
            {
              internalType: 'uint256',
              name: 'alreadyWithdrawedAmount',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'AllUploadCount',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'AllRewardAmount',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'rewardAmount',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'rewardUpload',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'AllReturnAmount',
              type: 'uint256'
            },
            {
              internalType: 'address',
              name: 'walletAddr',
              type: 'address'
            },
            {
              internalType: 'bool',
              name: 'isUsed',
              type: 'bool'
            }
          ],
          internalType: 'struct MyStake.Stake',
          name: '',
          type: 'tuple'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addr',
          type: 'address'
        }
      ],
      name: 'getAllReturnAmount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addr',
          type: 'address'
        }
      ],
      name: 'getAllRewardAmount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addr',
          type: 'address'
        }
      ],
      name: 'getAllUploadCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getAllUser',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addr',
          type: 'address'
        }
      ],
      name: 'getClientInfos',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'ts',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_ip',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_bandwidth',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_gpu',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_storage',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_cpu',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_mem',
              type: 'uint256'
            }
          ],
          internalType: 'struct MyStake.ClientInfo[]',
          name: '',
          type: 'tuple[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addr',
          type: 'address'
        }
      ],
      name: 'getDepositAmount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getGas',
      outputs: [],
      stateMutability: 'payable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getGasAmount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getReturnPercent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addr',
          type: 'address'
        }
      ],
      name: 'getRewardAmount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'nodeAddress',
          type: 'address'
        }
      ],
      name: 'getRewardLog',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'rewardType',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'rewardTime',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          internalType: 'struct MyStake.RewardInfo[]',
          name: '',
          type: 'tuple[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getRewardPercent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getTokenAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getUploadCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getUploadTime',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addr',
          type: 'address'
        }
      ],
      name: 'isExistEntry',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'isTokenSet',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'paused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'random',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256'
        }
      ],
      name: 'returnToken',
      outputs: [],
      stateMutability: 'payable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'reward',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_factoryAddress',
          type: 'address'
        }
      ],
      name: 'setFactoryAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'ga',
          type: 'uint256'
        }
      ],
      name: 'setGasAmount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'rt',
          type: 'uint256'
        }
      ],
      name: 'setReturnPercent',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'rp',
          type: 'uint256'
        }
      ],
      name: 'setRewardPercent',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_tokenAddress',
          type: 'address'
        }
      ],
      name: 'setTokenAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_uploadCount',
          type: 'uint256'
        }
      ],
      name: 'setUploadCount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_uploadTime',
          type: 'uint256'
        }
      ],
      name: 'setUploadTime',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256'
        },
        {
          internalType: 'address',
          name: 'walletAddr',
          type: 'address'
        }
      ],
      name: 'stakeToken',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'undeposit',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'ts',
          type: 'uint256'
        },
        {
          internalType: 'string',
          name: 'tsStr',
          type: 'string'
        },
        {
          internalType: 'bytes32',
          name: 'sign',
          type: 'bytes32'
        },
        {
          internalType: 'address[]',
          name: 'nodeAddress',
          type: 'address[]'
        },
        {
          internalType: 'uint256[][][]',
          name: 'TokenIds',
          type: 'uint256[][][]'
        },
        {
          internalType: 'uint256[][][]',
          name: 'TokenPrice',
          type: 'uint256[][][]'
        }
      ],
      name: 'uploadAllInfo',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ]
}

const UBQ = {
  ADDRESS: '0x13FDAF4944ac2B62BFB79D054AacB5288db1275E',
  ABI: [
    {
      inputs: [
        {
          internalType: 'string',
          name: 'name_',
          type: 'string'
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256'
        }
      ],
      name: 'Approval',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256'
        }
      ],
      name: 'Transfer',
      type: 'event'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address'
        }
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'subtractedValue',
          type: 'uint256'
        }
      ],
      name: 'decreaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'addedValue',
          type: 'uint256'
        }
      ],
      name: 'increaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'sender',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ]
}

const NFT = {
  IP: '0x80c6e1B8Ba65bee57c016d5Fb3aD1a1fA109Ba46',
  BANDWITH: '0xb5D0AC4f718bC5B887E4C3125Da287cB636d6c5c',
  CPU: '0x390376DF5E1625a4e9C740d831983A53d6ca38B1',
  GPU: '0x3E729959f9f12C40771D8f07C240b1C7E5F393D2',
  RAM: '0xa37005E0eC7e9181da571c2DBFFc72e7f5eC5a89',
  STORAGE: '0x73E413DEBB26C2C39F8791CD01F1C568600704b0',
  ABI: [
    {
      inputs: [
        {
          internalType: 'string',
          name: 'name',
          type: 'string'
        },
        {
          internalType: 'string',
          name: 'symbol',
          type: 'string'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'approved',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'Approval',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'operator',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'approved',
          type: 'bool'
        }
      ],
      name: 'ApprovalForAll',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'MinterAdded',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'MinterRemoved',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'Transfer',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint64',
          name: 'expires',
          type: 'uint64'
        }
      ],
      name: 'UpdateUser',
      type: 'event'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'addMinter',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'approve',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address'
        }
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'burn',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'getApproved',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'getHardwareInfo',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'operator',
          type: 'address'
        }
      ],
      name: 'isApprovedForAll',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'isMinter',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address'
        },
        {
          internalType: 'string',
          name: 'info',
          type: 'string'
        }
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'ownerOf',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'renounceMinter',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes'
        }
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'operator',
          type: 'address'
        },
        {
          internalType: 'bool',
          name: 'approved',
          type: 'bool'
        }
      ],
      name: 'setApprovalForAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        },
        {
          internalType: 'address',
          name: 'user',
          type: 'address'
        },
        {
          internalType: 'uint64',
          name: 'expires',
          type: 'uint64'
        }
      ],
      name: 'setUser',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4'
        }
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'tokenURI',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'transferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'userExpires',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'userOf',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    }
  ]
}

const NODE_FACTORY = {
  ADDRESS: '0x4245641C314e1bb24A592a5FF3DEDFa8328b93fc',
  ABI: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'contractAddress',
          type: 'address'
        }
      ],
      name: 'MinerDeployed',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'OwnershipTransferred',
      type: 'event'
    },
    {
      inputs: [],
      name: 'bandwidthAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'miner',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'contractAddress',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'burnNfts',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'cpuAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'issuer',
          type: 'address'
        }
      ],
      name: 'deployMiner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'miner',
          type: 'address'
        }
      ],
      name: 'getIdsByMiner',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256[]',
              name: 'ipTokenIds',
              type: 'uint256[]'
            },
            {
              internalType: 'uint256[]',
              name: 'bandwidthTokenIds',
              type: 'uint256[]'
            },
            {
              internalType: 'uint256[]',
              name: 'gpuTokenIds',
              type: 'uint256[]'
            },
            {
              internalType: 'uint256[]',
              name: 'storageTokenIds',
              type: 'uint256[]'
            },
            {
              internalType: 'uint256[]',
              name: 'cpuTokenIds',
              type: 'uint256[]'
            },
            {
              internalType: 'uint256[]',
              name: 'memTokenIds',
              type: 'uint256[]'
            }
          ],
          internalType: 'struct MinerFactory.tokenInfo',
          name: '',
          type: 'tuple'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getPoolAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'contractAddress',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'getTokenPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'gpuAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_poolAddress',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'tokenAddr',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'ip',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'bandwidth',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'gpu',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_storage',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'cpu',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'mem',
          type: 'address'
        }
      ],
      name: 'initAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'ipAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'contractAddress',
          type: 'address'
        }
      ],
      name: 'isActive',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'memAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'miner',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'contractAddress',
          type: 'address'
        },
        {
          internalType: 'string',
          name: '_info',
          type: 'string'
        }
      ],
      name: 'mintNfts',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'contractAddress',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: '_price',
          type: 'uint256'
        }
      ],
      name: 'setTokenPrice',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'storageAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ]
}

const TRADE = {
  ADDRESS: '0x2796677F2426960B692eCB83388cEBe135B6b4FA',
  ABI: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'OwnershipTransferred',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'Paused',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'Unpaused',
      type: 'event'
    },
    {
      inputs: [
        {
          internalType: 'uint64',
          name: 'duration',
          type: 'uint64'
        },
        {
          internalType: 'uint256',
          name: 'totalPrice',
          type: 'uint256'
        },
        {
          internalType: 'address',
          name: 'appAddress',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'buyAddress',
          type: 'address'
        }
      ],
      name: 'addOrder',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'burnExpireToken',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getExpireToken',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getLatestOrderId',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'orderId',
          type: 'uint256'
        }
      ],
      name: 'getOrderBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'orderId',
          type: 'uint256'
        }
      ],
      name: 'getOrderInfo',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'startTime',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'createTime',
              type: 'uint256'
            },
            {
              internalType: 'uint64',
              name: 'duration',
              type: 'uint64'
            },
            {
              internalType: 'uint256',
              name: 'totalFee',
              type: 'uint256'
            },
            {
              internalType: 'address',
              name: 'appAddress',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'expiresTime',
              type: 'uint256'
            },
            {
              internalType: 'bool',
              name: 'isBurned',
              type: 'bool'
            }
          ],
          internalType: 'struct Trade.NodeInfo',
          name: '',
          type: 'tuple'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addr',
          type: 'address'
        }
      ],
      name: 'getOrderList',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'paused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_fac',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'cpu',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'mem',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'ip',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'bandwidth',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'gpu',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_storage',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_appFactory',
          type: 'address'
        }
      ],
      name: 'setERC721Address',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_tokenAddress',
          type: 'address'
        }
      ],
      name: 'setTokenAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'appAddress',
          type: 'address'
        },
        {
          internalType: 'address[]',
          name: '_nodeAddress',
          type: 'address[]'
        },
        {
          internalType: 'uint256[][][]',
          name: '_tokenIds',
          type: 'uint256[][][]'
        },
        {
          internalType: 'uint256',
          name: 'orderId',
          type: 'uint256'
        },
        {
          internalType: 'address',
          name: 'minerAddress',
          type: 'address'
        }
      ],
      name: 'setTokenIds',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'appAddress',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'orderId',
          type: 'uint256'
        }
      ],
      name: 'stopApp',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ]
}

const TEMPLATE_ABI = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_templateType',
        type: 'uint256'
      },
      {
        internalType: 'string[]',
        name: '_info',
        type: 'string[]'
      },
      {
        internalType: 'uint256[]',
        name: '_infoC',
        type: 'uint256[]'
      },
      {
        internalType: 'string',
        name: '_name',
        type: 'string'
      },
      {
        internalType: 'string',
        name: '_image',
        type: 'string'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'bandwidthC_',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'bandwidth_',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'cpuC_',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'cpu_',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'createTime',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'creator',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'gpuC_',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'gpu_',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'image',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'ipC_',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'ip_',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'memC_',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'mem_',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'storageC_',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'storage_',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'templateType',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]

const APP_ABI = [
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_templates',
        type: 'address[]'
      },
      {
        internalType: 'bool',
        name: '_isTemplate',
        type: 'bool'
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      },
      {
        internalType: 'string',
        name: '_name',
        type: 'string'
      },
      {
        internalType: 'string[]',
        name: '_image',
        type: 'string[]'
      },
      {
        internalType: 'bool',
        name: '_isExpanded',
        type: 'bool'
      },
      {
        internalType: 'address',
        name: '_tradeAddress',
        type: 'address'
      },
      {
        internalType: 'uint256[][]',
        name: '_tokenNeed',
        type: 'uint256[][]'
      },
      {
        internalType: 'string',
        name: '_pic',
        type: 'string'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    inputs: [],
    name: 'getBandwidthC_',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getBandwidthTokenIds',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getBandwidth_',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getCpuC_',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getCpuTokenIds',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getCpu_',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getGpuC_',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getGpuMem_',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getGpuTokenIds',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getImage',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getIpC_',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getIpTokenIds',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getIp_',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getIsExpanded',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getIsTemplate',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getMemC_',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getMemTokenIds',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getMem_',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getMyOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getName',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getNodeAddress',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getPic',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getStorageC_',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getStorageTokenIds',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getStorage_',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getTemplates',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getTokenIds',
    outputs: [
      {
        internalType: 'uint256[][][]',
        name: '',
        type: 'uint256[][][]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getTokenNeed',
    outputs: [
      {
        internalType: 'uint256[][]',
        name: '',
        type: 'uint256[][]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_isTemplate',
        type: 'bool'
      }
    ],
    name: 'setIsTemplate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_nodeAddress',
        type: 'address[]'
      },
      {
        internalType: 'uint256[][][]',
        name: '_tokenIds',
        type: 'uint256[][][]'
      }
    ],
    name: 'setNodeAddressAndTokenInfo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tradeAddress',
        type: 'address'
      }
    ],
    name: 'setTradeAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]

export { TEMPLATE_FACTORY, POOL_OF_CAPITAL, UBQ, NFT, NODE_FACTORY, TRADE, TEMPLATE_ABI, APP_ABI }
