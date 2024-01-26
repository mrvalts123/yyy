"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{40100:function(e,t,n){n.d(t,{DA:function(){return $},PN:function(){return J},xO:function(){return X}});var i=n(75105),r=n(52100),a=n(52466),o=n(78200);const u=new i.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),s=(new i.PublicKey("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"),new i.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")),c=new i.PublicKey("So11111111111111111111111111111111111111112");new i.PublicKey("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP");class m extends Error{constructor(e){super(e)}}class l extends m{constructor(){super(...arguments),this.name="TokenAccountNotFoundError"}}class d extends m{constructor(){super(...arguments),this.name="TokenInvalidAccountOwnerError"}}class p extends m{constructor(){super(...arguments),this.name="TokenInvalidAccountSizeError"}}class g extends m{constructor(){super(...arguments),this.name="TokenInvalidMintError"}}class y extends m{constructor(){super(...arguments),this.name="TokenOwnerOffCurveError"}}var h;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Mint=1]="Mint",e[e.Account=2]="Account"}(h||(h={}));var w;n(795).Buffer;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initialized=1]="Initialized",e[e.Frozen=2]="Frozen"}(w||(w={}));const A=(0,a.struct)([(0,o.ZL)("mint"),(0,o.ZL)("owner"),(0,o.AW)("amount"),(0,a.u32)("delegateOption"),(0,o.ZL)("delegate"),(0,a.u8)("state"),(0,a.u32)("isNativeOption"),(0,o.AW)("isNative"),(0,o.AW)("delegatedAmount"),(0,a.u32)("closeAuthorityOption"),(0,o.ZL)("closeAuthority")]),f=A.span;const M=(0,a.struct)([(0,a.u8)("m"),(0,a.u8)("n"),(0,o.Xg)("isInitialized"),(0,o.ZL)("signer1"),(0,o.ZL)("signer2"),(0,o.ZL)("signer3"),(0,o.ZL)("signer4"),(0,o.ZL)("signer5"),(0,o.ZL)("signer6"),(0,o.ZL)("signer7"),(0,o.ZL)("signer8"),(0,o.ZL)("signer9"),(0,o.ZL)("signer10"),(0,o.ZL)("signer11")]),S=M.span;var b=n(795).Buffer;const P=(0,a.struct)([(0,a.u32)("mintAuthorityOption"),(0,o.ZL)("mintAuthority"),(0,o.AW)("supply"),(0,a.u8)("decimals"),(0,o.Xg)("isInitialized"),(0,a.u32)("freezeAuthorityOption"),(0,o.ZL)("freezeAuthority")]),I=P.span;async function B(e,t,n,i=u){return function(e,t,n=u){if(!t)throw new l;if(!t.owner.equals(n))throw new d;if(t.data.length<I)throw new p;const i=P.decode(t.data.slice(0,I));let r=b.alloc(0);if(t.data.length>I){if(t.data.length<=f)throw new p;if(t.data.length===S)throw new p;if(t.data[f]!=h.Mint)throw new g;r=t.data.slice(f+1)}return{address:e,mintAuthority:i.mintAuthorityOption?i.mintAuthority:null,supply:i.supply,decimals:i.decimals,isInitialized:i.isInitialized,freezeAuthority:i.freezeAuthorityOption?i.freezeAuthority:null,tlvData:r}}(t,await e.getAccountInfo(t,n),i)}function K(e,t,n=!1,r=u,a=s){if(!n&&!i.PublicKey.isOnCurve(t.toBuffer()))throw new y;const[o]=i.PublicKey.findProgramAddressSync([t.toBuffer(),r.toBuffer(),e.toBuffer()],a);return o}var x;!function(e){e[e.InitializeMint=0]="InitializeMint",e[e.InitializeAccount=1]="InitializeAccount",e[e.InitializeMultisig=2]="InitializeMultisig",e[e.Transfer=3]="Transfer",e[e.Approve=4]="Approve",e[e.Revoke=5]="Revoke",e[e.SetAuthority=6]="SetAuthority",e[e.MintTo=7]="MintTo",e[e.Burn=8]="Burn",e[e.CloseAccount=9]="CloseAccount",e[e.FreezeAccount=10]="FreezeAccount",e[e.ThawAccount=11]="ThawAccount",e[e.TransferChecked=12]="TransferChecked",e[e.ApproveChecked=13]="ApproveChecked",e[e.MintToChecked=14]="MintToChecked",e[e.BurnChecked=15]="BurnChecked",e[e.InitializeAccount2=16]="InitializeAccount2",e[e.SyncNative=17]="SyncNative",e[e.InitializeAccount3=18]="InitializeAccount3",e[e.InitializeMultisig2=19]="InitializeMultisig2",e[e.InitializeMint2=20]="InitializeMint2",e[e.GetAccountDataSize=21]="GetAccountDataSize",e[e.InitializeImmutableOwner=22]="InitializeImmutableOwner",e[e.AmountToUiAmount=23]="AmountToUiAmount",e[e.UiAmountToAmount=24]="UiAmountToAmount",e[e.InitializeMintCloseAuthority=25]="InitializeMintCloseAuthority",e[e.TransferFeeExtension=26]="TransferFeeExtension",e[e.ConfidentialTransferExtension=27]="ConfidentialTransferExtension",e[e.DefaultAccountStateExtension=28]="DefaultAccountStateExtension",e[e.Reallocate=29]="Reallocate",e[e.MemoTransferExtension=30]="MemoTransferExtension",e[e.CreateNativeMint=31]="CreateNativeMint",e[e.InitializeNonTransferableMint=32]="InitializeNonTransferableMint",e[e.InterestBearingMintExtension=33]="InterestBearingMintExtension"}(x||(x={}));var k=n(795).Buffer;const v=(0,a.struct)([(0,a.u8)("instruction")]);function C(e,t=u){const n=[{pubkey:e,isSigner:!1,isWritable:!0}],r=k.alloc(v.span);return v.encode({instruction:x.SyncNative},r),new i.TransactionInstruction({keys:n,programId:t,data:r})}var N=n(795).Buffer;const O=(0,a.struct)([(0,a.u8)("instruction")]);function T(e,t,n,r=[],a=u){const o=function(e,t,n){if(n.length){e.push({pubkey:t,isSigner:!1,isWritable:!1});for(const t of n)e.push({pubkey:t.publicKey,isSigner:!0,isWritable:!1})}else e.push({pubkey:t,isSigner:!0,isWritable:!1});return e}([{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0}],n,r),s=N.alloc(O.span);return O.encode({instruction:x.CloseAccount},s),new i.TransactionInstruction({keys:o,programId:a,data:s})}var D=n(795).Buffer;var W=n(795).Buffer,E=Object.defineProperty,z=Object.defineProperties,F=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Z=(e,t)=>{for(var n in t||(t={}))q.call(t,n)&&R(e,n,t[n]);if(U)for(var n of U(t))L.call(t,n)&&R(e,n,t[n]);return e},_=(e,t)=>z(e,F(t)),j=(e,t,n)=>new Promise(((i,r)=>{var a=e=>{try{u(n.next(e))}catch(t){r(t)}},o=e=>{try{u(n.throw(e))}catch(t){r(t)}},u=e=>e.done?i(e.value):Promise.resolve(e.value).then(a,o);u((n=n.apply(e,t)).next())}));function V(e,t){return j(this,null,(function*(){return BigInt(yield e.getBalance(t))}))}function H(e,t){return j(this,null,(function*(){return BigInt((yield e.getTokenAccountBalance(t)).value.amount)}))}var X={version:"0.1.0",name:"dca",instructions:[{name:"openDca",accounts:[{name:"dca",isMut:!0,isSigner:!1},{name:"user",isMut:!0,isSigner:!0},{name:"inputMint",isMut:!1,isSigner:!1},{name:"outputMint",isMut:!1,isSigner:!1},{name:"userAta",isMut:!0,isSigner:!1},{name:"inAta",isMut:!0,isSigner:!1},{name:"outAta",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"applicationIdx",type:"u64"},{name:"inAmount",type:"u64"},{name:"inAmountPerCycle",type:"u64"},{name:"cycleFrequency",type:"i64"},{name:"minPrice",type:{option:"u64"}},{name:"maxPrice",type:{option:"u64"}},{name:"startAt",type:{option:"i64"}},{name:"closeWsolInAta",type:{option:"bool"}}]},{name:"openDcaV2",accounts:[{name:"dca",isMut:!0,isSigner:!1},{name:"user",isMut:!1,isSigner:!0},{name:"payer",isMut:!0,isSigner:!0},{name:"inputMint",isMut:!1,isSigner:!1},{name:"outputMint",isMut:!1,isSigner:!1},{name:"userAta",isMut:!0,isSigner:!1},{name:"inAta",isMut:!0,isSigner:!1},{name:"outAta",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"applicationIdx",type:"u64"},{name:"inAmount",type:"u64"},{name:"inAmountPerCycle",type:"u64"},{name:"cycleFrequency",type:"i64"},{name:"minPrice",type:{option:"u64"}},{name:"maxPrice",type:{option:"u64"}},{name:"startAt",type:{option:"i64"}}]},{name:"closeDca",accounts:[{name:"user",isMut:!0,isSigner:!0},{name:"dca",isMut:!0,isSigner:!1},{name:"inputMint",isMut:!1,isSigner:!1},{name:"outputMint",isMut:!1,isSigner:!1},{name:"inAta",isMut:!0,isSigner:!1},{name:"outAta",isMut:!0,isSigner:!1},{name:"userInAta",isMut:!0,isSigner:!1},{name:"userOutAta",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[]},{name:"withdraw",accounts:[{name:"user",isMut:!0,isSigner:!0},{name:"dca",isMut:!0,isSigner:!1},{name:"inputMint",isMut:!1,isSigner:!1},{name:"outputMint",isMut:!1,isSigner:!1},{name:"dcaAta",isMut:!0,isSigner:!1},{name:"userInAta",isMut:!0,isSigner:!1,isOptional:!0},{name:"userOutAta",isMut:!0,isSigner:!1,isOptional:!0},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"withdrawParams",type:{defined:"WithdrawParams"}}]},{name:"deposit",accounts:[{name:"user",isMut:!0,isSigner:!0},{name:"dca",isMut:!0,isSigner:!1},{name:"inAta",isMut:!0,isSigner:!1},{name:"userInAta",isMut:!0,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"depositIn",type:"u64"}]},{name:"withdrawFees",accounts:[{name:"admin",isMut:!0,isSigner:!0},{name:"mint",isMut:!1,isSigner:!1},{name:"feeAuthority",isMut:!1,isSigner:!1,docs:["CHECK"]},{name:"programFeeAta",isMut:!0,isSigner:!1},{name:"adminFeeAta",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1}],args:[{name:"amount",type:"u64"}]},{name:"initiateFlashFill",accounts:[{name:"keeper",isMut:!0,isSigner:!0},{name:"dca",isMut:!0,isSigner:!1},{name:"inputMint",isMut:!1,isSigner:!1,docs:["The token to borrow"]},{name:"keeperInAta",isMut:!0,isSigner:!1,docs:["The account to send borrowed tokens to"]},{name:"inAta",isMut:!0,isSigner:!1,docs:["The account to borrow from"]},{name:"outAta",isMut:!1,isSigner:!1,docs:["The account to repay to"]},{name:"instructionsSysvar",isMut:!1,isSigner:!1,docs:["Solana Instructions Sysvar"]},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1}],args:[]},{name:"fulfillFlashFill",accounts:[{name:"keeper",isMut:!0,isSigner:!0},{name:"dca",isMut:!0,isSigner:!1},{name:"inputMint",isMut:!1,isSigner:!1},{name:"outputMint",isMut:!1,isSigner:!1},{name:"keeperInAta",isMut:!1,isSigner:!1},{name:"inAta",isMut:!1,isSigner:!1},{name:"outAta",isMut:!1,isSigner:!1},{name:"feeAuthority",isMut:!1,isSigner:!1,docs:["CHECK"]},{name:"feeAta",isMut:!0,isSigner:!1},{name:"instructionsSysvar",isMut:!1,isSigner:!1,docs:["Solana Instructions Sysvar"]},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"repayAmount",type:"u64"}]},{name:"transfer",accounts:[{name:"keeper",isMut:!0,isSigner:!0},{name:"dca",isMut:!0,isSigner:!1},{name:"user",isMut:!0,isSigner:!1},{name:"outputMint",isMut:!1,isSigner:!1},{name:"dcaOutAta",isMut:!0,isSigner:!1},{name:"userOutAta",isMut:!0,isSigner:!1,isOptional:!0},{name:"intermediateAccount",isMut:!0,isSigner:!1,isOptional:!0},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[]},{name:"endAndClose",accounts:[{name:"keeper",isMut:!0,isSigner:!0},{name:"dca",isMut:!0,isSigner:!1},{name:"inputMint",isMut:!1,isSigner:!1},{name:"outputMint",isMut:!1,isSigner:!1},{name:"inAta",isMut:!0,isSigner:!1},{name:"outAta",isMut:!0,isSigner:!1},{name:"user",isMut:!0,isSigner:!1},{name:"userOutAta",isMut:!0,isSigner:!1,isOptional:!0},{name:"initUserOutAta",isMut:!0,isSigner:!1,isOptional:!0},{name:"intermediateAccount",isMut:!0,isSigner:!1,isOptional:!0},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[]}],accounts:[{name:"dca",type:{kind:"struct",fields:[{name:"user",type:"publicKey"},{name:"inputMint",type:"publicKey"},{name:"outputMint",type:"publicKey"},{name:"idx",type:"u64"},{name:"nextCycleAt",type:"i64"},{name:"inDeposited",type:"u64"},{name:"inWithdrawn",type:"u64"},{name:"outWithdrawn",type:"u64"},{name:"inUsed",type:"u64"},{name:"outReceived",type:"u64"},{name:"inAmountPerCycle",type:"u64"},{name:"cycleFrequency",type:"i64"},{name:"nextCycleAmountLeft",type:"u64"},{name:"inAccount",type:"publicKey"},{name:"outAccount",type:"publicKey"},{name:"minOutAmount",type:"u64"},{name:"maxOutAmount",type:"u64"},{name:"keeperInBalanceBeforeBorrow",type:"u64"},{name:"dcaOutBalanceBeforeSwap",type:"u64"},{name:"createdAt",type:"i64"},{name:"bump",type:"u8"}]}}],types:[{name:"WithdrawParams",type:{kind:"struct",fields:[{name:"withdrawAmount",type:"u64"},{name:"withdrawal",type:{defined:"Withdrawal"}}]}},{name:"Withdrawal",type:{kind:"enum",variants:[{name:"In"},{name:"Out"}]}}],events:[{name:"CollectedFee",fields:[{name:"userKey",type:"publicKey",index:!1},{name:"dcaKey",type:"publicKey",index:!1},{name:"mint",type:"publicKey",index:!1},{name:"amount",type:"u64",index:!1}]},{name:"Filled",fields:[{name:"userKey",type:"publicKey",index:!1},{name:"dcaKey",type:"publicKey",index:!1},{name:"inputMint",type:"publicKey",index:!1},{name:"outputMint",type:"publicKey",index:!1},{name:"inAmount",type:"u64",index:!1},{name:"outAmount",type:"u64",index:!1},{name:"feeMint",type:"publicKey",index:!1},{name:"fee",type:"u64",index:!1}]},{name:"Opened",fields:[{name:"userKey",type:"publicKey",index:!1},{name:"dcaKey",type:"publicKey",index:!1},{name:"inDeposited",type:"u64",index:!1},{name:"inputMint",type:"publicKey",index:!1},{name:"outputMint",type:"publicKey",index:!1},{name:"cycleFrequency",type:"i64",index:!1},{name:"inAmountPerCycle",type:"u64",index:!1},{name:"createdAt",type:"i64",index:!1}]},{name:"Closed",fields:[{name:"userKey",type:"publicKey",index:!1},{name:"dcaKey",type:"publicKey",index:!1},{name:"inDeposited",type:"u64",index:!1},{name:"inputMint",type:"publicKey",index:!1},{name:"outputMint",type:"publicKey",index:!1},{name:"cycleFrequency",type:"i64",index:!1},{name:"inAmountPerCycle",type:"u64",index:!1},{name:"createdAt",type:"i64",index:!1},{name:"totalInWithdrawn",type:"u64",index:!1},{name:"totalOutWithdrawn",type:"u64",index:!1},{name:"unfilledAmount",type:"u64",index:!1},{name:"userClosed",type:"bool",index:!1}]},{name:"Withdraw",fields:[{name:"dcaKey",type:"publicKey",index:!1},{name:"inAmount",type:"u64",index:!1},{name:"outAmount",type:"u64",index:!1},{name:"userWithdraw",type:"bool",index:!1}]},{name:"Deposit",fields:[{name:"dcaKey",type:"publicKey",index:!1},{name:"amount",type:"u64",index:!1}]}],errors:[{code:6e3,name:"InvalidAmount",msg:"Invalid deposit amount"},{code:6001,name:"InvalidCycleAmount",msg:"Invalid deposit amount"},{code:6002,name:"InvalidPair",msg:"Invalid pair"},{code:6003,name:"TooFrequent",msg:"Too frequent DCA cycle"},{code:6004,name:"InvalidMinPrice",msg:"Minimum price constraint must be greater than 0"},{code:6005,name:"InvalidMaxPrice",msg:"Maximum price constraint must be greater than 0"},{code:6006,name:"InAmountInsufficient",msg:"In amount needs to be more than in amount per cycle"},{code:6007,name:"Unauthorized",msg:"Wrong user"},{code:6008,name:"NoInATA",msg:"inAta not passed in"},{code:6009,name:"NoUserInATA",msg:"userInAta not passed in"},{code:6010,name:"NoOutATA",msg:"outAta not passed in"},{code:6011,name:"NoUserOutATA",msg:"userOutAta not passed in"},{code:6012,name:"InsufficientBalanceInProgram",msg:"Trying to withdraw more than available"},{code:6013,name:"InvalidDepositAmount",msg:"Deposit should be more than 0"},{code:6014,name:"UserInsufficientBalance",msg:"User has insufficient balance"},{code:6015,name:"UnauthorizedKeeper",msg:"Unauthorized Keeper"},{code:6016,name:"UnrecognizedProgram",msg:"Unrecognized Program"},{code:6017,name:"MathErrors",msg:"Calculation errors"},{code:6018,name:"KeeperNotTimeToFill",msg:"Not time to fill"},{code:6019,name:"OrderFillAmountWrong",msg:"Order amount wrong"},{code:6020,name:"SwapOutAmountBelowMinimum",msg:"Out amount below expectations"},{code:6021,name:"WrongAdmin",msg:"Wrong admin"},{code:6022,name:"MathOverflow",msg:"Overflow in arithmetic operation"},{code:6023,name:"AddressMismatch",msg:"Address Mismatch"},{code:6024,name:"ProgramMismatch",msg:"Program Mismatch"},{code:6025,name:"IncorrectRepaymentAmount",msg:"Incorrect Repayment Amount"},{code:6026,name:"CannotBorrowBeforeRepay",msg:"Cannot Borrow Before Repay"},{code:6027,name:"NoRepaymentInstructionFound",msg:"No Repayment Found"},{code:6028,name:"MissingSwapInstructions",msg:"Missing Swap Instruction"},{code:6029,name:"UnexpectedSwapProgram",msg:"Expected Instruction to use Jupiter Swap Program"},{code:6030,name:"UnknownInstruction",msg:"Unknown Instruction"},{code:6031,name:"MissingRepayInstructions",msg:"Missing Repay Instruction"},{code:6032,name:"KeeperShortchanged",msg:"Keeper Shortchanged"},{code:6033,name:"WrongSwapOutAccount",msg:"Jup Swap to Wrong Out Account"},{code:6034,name:"WrongTransferAmount",msg:"Transfer amount should be exactly account balance"},{code:6035,name:"InsufficientBalanceForRent",msg:"Insufficient balance for rent"},{code:6036,name:"UnexpectedSolBalance",msg:"Unexpected SOL amount in intermediate account"},{code:6037,name:"InsufficientWsolForTransfer",msg:"Too little WSOL to perform transfer"},{code:6038,name:"MissedInstruction",msg:"Did not call initiate_flash_fill"},{code:6039,name:"WrongProgram",msg:"Did not call this program's initiate_flash_fill"},{code:6040,name:"BalanceNotZero",msg:"Can't close account with balance"},{code:6041,name:"UnexpectedWSOLLeftover",msg:"Should not have WSOL leftover in DCA out-token account"},{code:6042,name:"IntermediateAccountNotSet",msg:"Should pass in a WSOL intermediate account when transferring SOL"},{code:6043,name:"UnexpectedSwapInstruction",msg:"Did not call jup swap"}]},J={testnet:new i.PublicKey("devBa82xDUtHW6hVF27uCFCf6hmV323aJg1Qf9bgwWf"),devnet:new i.PublicKey("Betam4GuxvAes2uQ5vX8SackcxL5pxRuHowM5m2Ykmcq"),"mainnet-beta":new i.PublicKey("DCA265Vj8a9CEuX1eb1LWRnDT7uK6q1xMipnNyatn23M")},G=(new i.PublicKey("JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB"),(e,t,n,...r)=>j(void 0,[e,t,n,...r],(function*(e,t,n,r=n,a=!0){try{const o=yield async function(e,t,n=!1,r=u,a=s){if(!n&&!i.PublicKey.isOnCurve(t.toBuffer()))throw new y;const[o]=await i.PublicKey.findProgramAddress([t.toBuffer(),r.toBuffer(),e.toBuffer()],a);return o}(t,n,a);if(yield e.getAccountInfo(o))return{ataPubKey:o,ix:void 0};const c=function(e,t,n,r,a=u,o=s){const c=[{pubkey:e,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:i.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1}];return new i.TransactionInstruction({keys:c,programId:o,data:D.alloc(0)})}(r,o,n,t);return{ataPubKey:o,ix:c}}catch(o){throw console.error("Error::getOrCreateATAInstruction",o),o}}))),$=class{constructor(e,t="mainnet-beta",n){this.connection=e;const i=new r.Y7(e,{},r.Y7.defaultOptions());this.program=new r.$r(X,null!=n?n:J[t],i)}getDcaPubKey(e,t,n,r){return j(this,null,(function*(){const a=r.toArrayLike(W,"le",8),[o]=yield i.PublicKey.findProgramAddressSync([W.from("dca"),e.toBuffer(),t.toBuffer(),n.toBuffer(),a],this.program.programId);return o}))}fetchDCA(e){return j(this,null,(function*(){const t=yield this.program.account.dca.fetch(e);return _(Z({},t),{inBalance:t.inDeposited.sub(t.inUsed).sub(t.inWithdrawn),outBalance:t.outReceived.sub(t.outReceived)})}))}createDCA(e){return j(this,null,(function*(){let{user:t,inAmount:n,inAmountPerCycle:a,cycleSecondsApart:o,inputMint:u,outputMint:s,minOutAmountPerCycle:m,maxOutAmountPerCycle:l,startAt:d,userInTokenAccount:p}=e;if(n<a)throw new Error("inAmount must be greater than inAmountPerCycle");if(BigInt(o.toString())<BigInt(30))throw new Error("cycleSecondsApart must be at least 30 seconds");if(m&&l&&BigInt(m.toString())>BigInt(l.toString()))throw new Error("minOutAmountPerCycle must be less than maxOutAmountPerCycle");if(t=new i.PublicKey(t),u=new i.PublicKey(u),s=new i.PublicKey(s),p||(p=K(u,t,!0)),u.equals(c)&&new r.BN((yield V(this.connection,t)).toString())<n)throw new Error("User does not have sufficient inputMint");if(!u.equals(c)&&new r.BN((yield H(this.connection,p)).toString())<n)throw new Error("User does not have sufficient inputMint");return this._createDCA(t,p,n,a,o,u,s,m,l,d)}))}_createDCA(e,t,n,i,a,o,u,s=null,m=null,l=null){return j(this,null,(function*(){const d=[];let p=!1;if(o.equals(c)){const{ataPubKey:t,ix:i}=yield G(this.connection,o,e),a=r.rV.SystemProgram.transfer({fromPubkey:e,lamports:new r.BN(n.toString()).toNumber(),toPubkey:t}),u=C(t);i&&(p=!0,d.push(i)),d.push(a),d.push(u)}if(!u.equals(c)){const{ataPubKey:t,ix:n}=yield G(this.connection,u,e);n&&d.push(n)}const g=new r.BN(parseInt((Date.now()/1e3).toString())),y=yield this.getDcaPubKey(e,o,u,g);return{tx:yield this.program.methods.openDca(g,new r.BN(n.toString()),new r.BN(i.toString()),new r.BN(a.toString()),s?new r.BN(s.toString()):new r.BN(0),m?new r.BN(m.toString()):new r.BN(0),l?new r.BN(l.toString()):new r.BN(0),p).accounts({user:e,dca:y,inputMint:o,outputMint:u,userAta:t,inAta:K(o,y,!0),outAta:K(u,y,!0)}).preInstructions(d).transaction(),dcaPubKey:y}}))}createDcaV2(e,t=!1){return j(this,null,(function*(){let{payer:n,user:a,inAmount:o,inAmountPerCycle:u,cycleSecondsApart:s,inputMint:m,outputMint:l,minOutAmountPerCycle:d,maxOutAmountPerCycle:p,startAt:g,userInTokenAccount:y}=e;if(o<u)throw new Error("inAmount must be greater than inAmountPerCycle");if(BigInt(s.toString())<BigInt(30))throw new Error("cycleSecondsApart must be at least 30 seconds");if(d&&p&&BigInt(d.toString())>BigInt(p.toString()))throw new Error("minOutAmountPerCycle must be less than maxOutAmountPerCycle");if(n=new i.PublicKey(n),a=new i.PublicKey(a),m=new i.PublicKey(m),l=new i.PublicKey(l),y||(y=K(m,a,!0)),!t){if(m.equals(c)&&new r.BN((yield V(this.connection,a)).toString())<o)throw new Error("User does not have sufficient inputMint");if(!m.equals(c)&&new r.BN((yield H(this.connection,y)).toString())<o)throw new Error("User does not have sufficient inputMint")}return this._createDCAV2(n,a,y,o,u,s,m,l,d,p,g)}))}_createDCAV2(e,t,n,i,a,o,u,s,m=null,l=null,d=null){return j(this,null,(function*(){const p=[],g=[];if(u.equals(c)){const{ataPubKey:e,ix:n}=yield G(this.connection,u,t),a=r.rV.SystemProgram.transfer({fromPubkey:t,lamports:new r.BN(i.toString()).toNumber(),toPubkey:e}),o=C(e);n&&(p.push(n),g.push(T(e,t,t))),p.push(a),p.push(o)}if(!s.equals(c)){const{ix:e}=yield G(this.connection,s,t);e&&p.push(e)}const y=new r.BN(parseInt((Date.now()/1e3).toString())),h=yield this.getDcaPubKey(t,u,s,y);return{tx:yield this.program.methods.openDcaV2(y,new r.BN(i.toString()),new r.BN(a.toString()),new r.BN(o.toString()),m?new r.BN(m.toString()):new r.BN(0),l?new r.BN(l.toString()):new r.BN(0),d?new r.BN(d.toString()):new r.BN(0)).accounts({dca:h,user:t,payer:e,inputMint:u,outputMint:s,userAta:n,inAta:K(u,h,!0),outAta:K(s,h,!0)}).preInstructions(p).postInstructions(g).transaction(),dcaPubKey:h}}))}closeDCA(e){return j(this,arguments,(function*({user:e,dca:t}){e=new i.PublicKey(e),t=new i.PublicKey(t);const n=yield this.fetchDCA(t),r=n.inputMint,a=n.outputMint,o=K(r,e,!0),u=K(a,e,!0),s=K(r,t,!0),c=K(a,t,!0);return this._closeDCA(e,t,r,a,o,u,s,c)}))}_closeDCA(e,t,n,i,r,a,o,u){return j(this,null,(function*(){const s=[];n.equals(c)&&s.push(T(r,e,e)),i.equals(c)&&s.push(T(a,e,e));return{tx:yield this.program.methods.closeDca().accounts({user:e,dca:t,inputMint:n,outputMint:i,inAta:o,outAta:u,userInAta:r,userOutAta:a}).postInstructions(s).transaction()}}))}deposit(e){return j(this,null,(function*(){let{user:t,dca:n,amount:a}=e;t=new i.PublicKey(t),n=new i.PublicKey(n);const o=yield this.fetchDCA(n),u=K(o.inputMint,t,!1),s=K(o.inputMint,n,!0);return a=new r.BN(a.toString()),this._deposit(t,n,o.inputMint,u,s,a)}))}_deposit(e,t,n,i,a,o){return j(this,null,(function*(){const u=[];if(n.equals(c)){const{ataPubKey:t,ix:i}=yield G(this.connection,n,e),a=r.rV.SystemProgram.transfer({fromPubkey:e,lamports:new r.BN(o.toString()).toNumber(),toPubkey:t}),s=C(t);i&&u.push(i),u.push(a),u.push(s)}return{tx:yield this.program.methods.deposit(o).accounts({user:e,dca:t,userInAta:i,inAta:a}).preInstructions(u).transaction()}}))}withdraw(e){return j(this,arguments,(function*({user:e,dca:t,inputMint:n,outputMint:a,withdrawInAmount:o,withdrawOutAmount:u}){if(e=new i.PublicKey(e),t=new i.PublicKey(t),!n||!a)throw new Error("Need to supply at least input mint or output mint or both");if(n&&!o)throw new Error("withdrawInAmount not supplied");if(a&&!u)throw new Error("withdrawOutAmount not supplied");const s=yield this.fetchDCA(t);if(o&&!new i.PublicKey(n).equals(s.inputMint))throw new Error("Wrong inputMint supplied");if(u&&!new i.PublicKey(a).equals(s.outputMint))throw new Error("Wrong outputMint supplied");const c=K(s.inputMint,t,!0),m=K(s.outputMint,t,!0),l=K(s.inputMint,e,!1),d=K(s.outputMint,e,!1);return o=o?new r.BN(o.toString()):new r.BN(0),u=u?new r.BN(u.toString()):new r.BN(0),n=s.inputMint,a=s.outputMint,this._withdraw(e,t,n,a,c,m,l,d,o,u)}))}_withdraw(e,t,n,i,a,o,u,s,m,l){return j(this,null,(function*(){const d={in:{}},p={out:{}};let g;const y=[];if(n&&m&&n.equals(c)){if(!u)throw new Error("userInAta not supplied");y.push(T(u,e,e))}if(i&&l&&i.equals(c)){if(!s)throw new Error("userOutAta not supplied");y.push(T(s,e,e))}if(m.gt(new r.BN(0))&&l.gt(new r.BN(0))){const r={withdrawAmount:m,withdrawal:d},c=yield this.program.methods.withdraw(r).accounts({user:e,dca:t,inputMint:n,outputMint:i,dcaAta:a,userInAta:u,userOutAta:s}).instruction(),h={withdrawAmount:l,withdrawal:p};g=yield this.program.methods.withdraw(h).accounts({user:e,dca:t,inputMint:n,outputMint:i,dcaAta:o,userInAta:u,userOutAta:s}).preInstructions([c]).postInstructions(y).transaction()}else if(m.gt(new r.BN(0))){const r={withdrawAmount:m,withdrawal:d};g=yield this.program.methods.withdraw(r).accounts({user:e,dca:t,inputMint:n,outputMint:i,dcaAta:a,userInAta:u,userOutAta:s}).postInstructions(y).transaction()}else{if(!l.gt(new r.BN(0)))throw new Error("Unexpected error - no amount specified for withdrawal");{const r={withdrawAmount:l,withdrawal:p};g=yield this.program.methods.withdraw(r).accounts({user:e,dca:t,inputMint:n,outputMint:i,dcaAta:o,userInAta:u,userOutAta:s}).postInstructions(y).transaction()}}return{tx:g}}))}getAll(){return j(this,null,(function*(){return this.program.account.dca.all()}))}getCurrentByUser(e,t,n){return j(this,null,(function*(){const i=yield this.program.account.dca.all([{memcmp:{offset:8,bytes:e.toBase58()}}]);return t&&n?i.filter((e=>e.account.inputMint.equals(t)||e.account.outputMint.equals(n))):t?(console.log("has input mint"),i.filter((e=>e.account.inputMint.equals(t)))):n?i.filter((e=>e.account.outputMint.equals(n))):i}))}getClosedByUser(e,t,n,a,o){return j(this,null,(function*(){let u=`https://dca-api.jup.ag/user/${e.toString()}/dca?status=1`;a&&(u+=`&input-mint=${a.toBase58()}`),o&&(u+=`&output-mint=${o.toBase58()}`),t&&(u+=`&before=${t.toISOString()}`),n&&(u+=`&limit=${n}`);const s=yield fetch(u);return(yield s.json()).data.dcaAccounts.map((e=>{let t=[];return e.fills.forEach((e=>{t.push({userKey:new i.PublicKey(e.userKey),dcaKey:new i.PublicKey(e.dcaKey),inputMint:new i.PublicKey(e.inputMint),outputMint:new i.PublicKey(e.inputMint),inAmount:e.inAmount,outAmount:e.outAmount,feeMint:new i.PublicKey(e.feeMint),fee:e.fee,txId:e.txId,confirmedAt:new Date(Date.parse(e.confirmedAt))})})),{publicKey:new i.PublicKey(e.dcaKey),account:{createdAt:new r.BN(Math.floor(Date.parse(e.createdAt)/1e3)),updatedAt:new r.BN(Math.floor(Date.parse(e.updatedAt)/1e3)),user:new i.PublicKey(e.userKey),inputMint:new i.PublicKey(e.inputMint),outputMint:new i.PublicKey(e.outputMint),inDeposited:new r.BN(e.inDeposited),inAmountPerCycle:new r.BN(e.inAmountPerCycle),cycleFrequency:new r.BN(e.cycleFrequency),inFilled:new r.BN(e.inDeposited).sub(new r.BN(e.inWithdrawn)),outReceived:new r.BN(e.outWithdrawn),inWithdrawn:new r.BN(e.inWithdrawn),outWithdrawn:new r.BN(e.outWithdrawn),unfilledAmount:new r.BN(e.unfilledAmount),closeTxHash:e.closeTxHash,openTxHash:e.openTxHash,status:e.status,userClosed:e.userClosed},fills:t}}))}))}getBalancesByAccount(e){return j(this,null,(function*(){const t=yield this.fetchDCA(e),n=yield B(this.connection,t.inputMint),i=yield H(this.connection,t.inAccount),r=yield B(this.connection,t.outputMint),a=yield H(this.connection,t.outAccount);return{in:_(Z({},n),{dcaInAta:t.inAccount,dcaBalance:i}),out:_(Z({},r),{dcaOutAta:t.outAccount,dcaBalance:a}),stats:{inDeposited:BigInt(t.inDeposited.toString()),inWithdrawn:BigInt(t.inWithdrawn.toString()),outWithdrawn:BigInt(t.outWithdrawn.toString()),inUsed:BigInt(t.inUsed.toString()),outReceived:BigInt(t.outReceived.toString())}}}))}withdrawFees(e){return j(this,arguments,(function*({admin:e,mint:t,amount:n}){e=new i.PublicKey(e),t=new i.PublicKey(t),n=new r.BN(n.toString());let[a]=yield i.PublicKey.findProgramAddressSync([W.from("fee")],this.program.programId);const o=K(t,a,!0),u=K(t,e,!1);return{tx:yield this.program.methods.withdrawFees(new r.BN(n.toString())).accounts({admin:e,mint:t,feeAuthority:a,programFeeAta:o,adminFeeAta:u}).transaction()}}))}getFillHistory(e){return j(this,null,(function*(){try{e=e.toString();const t=yield fetch(`https://dca-api.jup.ag/dca/${e}/fills`);return(yield t.json()).data.fills.map((e=>({userKey:new i.PublicKey(e.userKey),dcaKey:new i.PublicKey(e.dcaKey),inputMint:new i.PublicKey(e.inputMint),outputMint:new i.PublicKey(e.outputMint),inAmount:e.inAmount,outAmount:e.outAmount,feeMint:new i.PublicKey(e.feeMint),fee:e.fee,txId:e.txId,confirmedAt:new Date(1e3*e.confirmedAt)})))}catch(t){return console.error(t),[]}}))}getAvailableTokens(){return j(this,null,(function*(){const e=yield fetch("https://cache.jup.ag/top-tokens");return(yield e.json()).map((e=>new i.PublicKey(e)))}))}}}}]);
//# sourceMappingURL=100-9fe785ecbf8ae3b8.js.map