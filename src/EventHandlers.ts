/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
import {
    DopeWarsLootContract_Approval_loader,
    DopeWarsLootContract_Approval_handler,
    DopeWarsLootContract_ApprovalForAll_loader,
    DopeWarsLootContract_ApprovalForAll_handler,
    DopeWarsLootContract_DelegateChanged_loader,
    DopeWarsLootContract_DelegateChanged_handler,
    DopeWarsLootContract_DelegateVotesChanged_loader,
    DopeWarsLootContract_DelegateVotesChanged_handler,
    DopeWarsLootContract_OwnershipTransferred_loader,
    DopeWarsLootContract_OwnershipTransferred_handler,
    DopeWarsLootContract_Transfer_loader,
    DopeWarsLootContract_Transfer_handler,
    HustlerContract_AddRles_loader,
    HustlerContract_AddRles_handler,
    HustlerContract_ApprovalForAll_loader,
    HustlerContract_ApprovalForAll_handler,
    HustlerContract_MetadataUpdate_loader,
    HustlerContract_MetadataUpdate_handler,
    HustlerContract_OwnershipTransferred_loader,
    HustlerContract_OwnershipTransferred_handler,
    HustlerContract_TransferBatch_loader,
    HustlerContract_TransferBatch_handler,
    HustlerContract_TransferSingle_loader,
    HustlerContract_TransferSingle_handler,
    HustlerContract_URI_loader,
    HustlerContract_URI_handler,
    InitiatorContract_Opened_loader,
    InitiatorContract_Opened_handler,
    InitiatorContract_OwnershipTransferred_loader,
    InitiatorContract_OwnershipTransferred_handler,
    PaperContract_Approval_loader,
    PaperContract_Approval_handler,
    PaperContract_DelegateChanged_loader,
    PaperContract_DelegateChanged_handler,
    PaperContract_DelegateVotesChanged_loader,
    PaperContract_DelegateVotesChanged_handler,
    PaperContract_OwnershipTransferred_loader,
    PaperContract_OwnershipTransferred_handler,
    PaperContract_Snapshot_loader,
    PaperContract_Snapshot_handler,
    PaperContract_Transfer_loader,
    PaperContract_Transfer_handler,
    SwapMeetContract_ApprovalForAll_loader,
    SwapMeetContract_ApprovalForAll_handler,
    SwapMeetContract_OwnershipTransferred_loader,
    SwapMeetContract_OwnershipTransferred_handler,
    SwapMeetContract_SetRle_loader,
    SwapMeetContract_SetRle_handler,
    SwapMeetContract_TransferBatch_loader,
    SwapMeetContract_TransferBatch_handler,
    SwapMeetContract_TransferSingle_loader,
    SwapMeetContract_TransferSingle_handler,
    SwapMeetContract_URI_loader,
    SwapMeetContract_URI_handler,
} from "../generated/src/Handlers.gen";

import {
    DopeWarsLoot_ApprovalEntity,
    DopeWarsLoot_ApprovalForAllEntity,
    DopeWarsLoot_DelegateChangedEntity,
    DopeWarsLoot_DelegateVotesChangedEntity,
    DopeWarsLoot_OwnershipTransferredEntity,
    DopeWarsLoot_TransferEntity,
    Hustler_AddRlesEntity,
    Hustler_ApprovalForAllEntity,
    Hustler_MetadataUpdateEntity,
    Hustler_OwnershipTransferredEntity,
    Hustler_TransferBatchEntity,
    Hustler_TransferSingleEntity,
    Hustler_URIEntity,
    Initiator_OpenedEntity,
    Initiator_OwnershipTransferredEntity,
    Paper_ApprovalEntity,
    Paper_DelegateChangedEntity,
    Paper_DelegateVotesChangedEntity,
    Paper_OwnershipTransferredEntity,
    Paper_SnapshotEntity,
    Paper_TransferEntity,
    SwapMeet_ApprovalForAllEntity,
    SwapMeet_OwnershipTransferredEntity,
    SwapMeet_SetRleEntity,
    SwapMeet_TransferBatchEntity,
    SwapMeet_TransferSingleEntity,
    SwapMeet_URIEntity,
EventsSummaryEntity
} from "./src/Types.gen";

const GLOBAL_EVENTS_SUMMARY_KEY = "GlobalEventsSummary";

const INITIAL_EVENTS_SUMMARY: EventsSummaryEntity = {
  id: GLOBAL_EVENTS_SUMMARY_KEY,
    dopeWarsLoot_ApprovalCount: BigInt(0),
    dopeWarsLoot_ApprovalForAllCount: BigInt(0),
    dopeWarsLoot_DelegateChangedCount: BigInt(0),
    dopeWarsLoot_DelegateVotesChangedCount: BigInt(0),
    dopeWarsLoot_OwnershipTransferredCount: BigInt(0),
    dopeWarsLoot_TransferCount: BigInt(0),
    hustler_AddRlesCount: BigInt(0),
    hustler_ApprovalForAllCount: BigInt(0),
    hustler_MetadataUpdateCount: BigInt(0),
    hustler_OwnershipTransferredCount: BigInt(0),
    hustler_TransferBatchCount: BigInt(0),
    hustler_TransferSingleCount: BigInt(0),
    hustler_URICount: BigInt(0),
    initiator_OpenedCount: BigInt(0),
    initiator_OwnershipTransferredCount: BigInt(0),
    paper_ApprovalCount: BigInt(0),
    paper_DelegateChangedCount: BigInt(0),
    paper_DelegateVotesChangedCount: BigInt(0),
    paper_OwnershipTransferredCount: BigInt(0),
    paper_SnapshotCount: BigInt(0),
    paper_TransferCount: BigInt(0),
    swapMeet_ApprovalForAllCount: BigInt(0),
    swapMeet_OwnershipTransferredCount: BigInt(0),
    swapMeet_SetRleCount: BigInt(0),
    swapMeet_TransferBatchCount: BigInt(0),
    swapMeet_TransferSingleCount: BigInt(0),
    swapMeet_URICount: BigInt(0),
};

    DopeWarsLootContract_Approval_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    DopeWarsLootContract_Approval_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    dopeWarsLoot_ApprovalCount: currentSummaryEntity.dopeWarsLoot_ApprovalCount + BigInt(1),
  };

  const dopeWarsLoot_ApprovalEntity: DopeWarsLoot_ApprovalEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      owner: event.params.owner      ,
      approved: event.params.approved      ,
      tokenId: event.params.tokenId      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.DopeWarsLoot_Approval.set(dopeWarsLoot_ApprovalEntity);
});
    DopeWarsLootContract_ApprovalForAll_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    DopeWarsLootContract_ApprovalForAll_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    dopeWarsLoot_ApprovalForAllCount: currentSummaryEntity.dopeWarsLoot_ApprovalForAllCount + BigInt(1),
  };

  const dopeWarsLoot_ApprovalForAllEntity: DopeWarsLoot_ApprovalForAllEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      owner: event.params.owner      ,
      operator: event.params.operator      ,
      approved: event.params.approved      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.DopeWarsLoot_ApprovalForAll.set(dopeWarsLoot_ApprovalForAllEntity);
});
    DopeWarsLootContract_DelegateChanged_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    DopeWarsLootContract_DelegateChanged_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    dopeWarsLoot_DelegateChangedCount: currentSummaryEntity.dopeWarsLoot_DelegateChangedCount + BigInt(1),
  };

  const dopeWarsLoot_DelegateChangedEntity: DopeWarsLoot_DelegateChangedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      delegator: event.params.delegator      ,
      fromDelegate: event.params.fromDelegate      ,
      toDelegate: event.params.toDelegate      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.DopeWarsLoot_DelegateChanged.set(dopeWarsLoot_DelegateChangedEntity);
});
    DopeWarsLootContract_DelegateVotesChanged_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    DopeWarsLootContract_DelegateVotesChanged_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    dopeWarsLoot_DelegateVotesChangedCount: currentSummaryEntity.dopeWarsLoot_DelegateVotesChangedCount + BigInt(1),
  };

  const dopeWarsLoot_DelegateVotesChangedEntity: DopeWarsLoot_DelegateVotesChangedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      delegate: event.params.delegate      ,
      previousBalance: event.params.previousBalance      ,
      newBalance: event.params.newBalance      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.DopeWarsLoot_DelegateVotesChanged.set(dopeWarsLoot_DelegateVotesChangedEntity);
});
    DopeWarsLootContract_OwnershipTransferred_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    DopeWarsLootContract_OwnershipTransferred_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    dopeWarsLoot_OwnershipTransferredCount: currentSummaryEntity.dopeWarsLoot_OwnershipTransferredCount + BigInt(1),
  };

  const dopeWarsLoot_OwnershipTransferredEntity: DopeWarsLoot_OwnershipTransferredEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      previousOwner: event.params.previousOwner      ,
      newOwner: event.params.newOwner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.DopeWarsLoot_OwnershipTransferred.set(dopeWarsLoot_OwnershipTransferredEntity);
});
    DopeWarsLootContract_Transfer_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    DopeWarsLootContract_Transfer_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    dopeWarsLoot_TransferCount: currentSummaryEntity.dopeWarsLoot_TransferCount + BigInt(1),
  };

  const dopeWarsLoot_TransferEntity: DopeWarsLoot_TransferEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      from: event.params.from      ,
      to: event.params.to      ,
      tokenId: event.params.tokenId      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.DopeWarsLoot_Transfer.set(dopeWarsLoot_TransferEntity);
});
    HustlerContract_AddRles_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    HustlerContract_AddRles_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    hustler_AddRlesCount: currentSummaryEntity.hustler_AddRlesCount + BigInt(1),
  };

  const hustler_AddRlesEntity: Hustler_AddRlesEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      part: event.params.part      ,
      len: event.params.len      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Hustler_AddRles.set(hustler_AddRlesEntity);
});
    HustlerContract_ApprovalForAll_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    HustlerContract_ApprovalForAll_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    hustler_ApprovalForAllCount: currentSummaryEntity.hustler_ApprovalForAllCount + BigInt(1),
  };

  const hustler_ApprovalForAllEntity: Hustler_ApprovalForAllEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      account: event.params.account      ,
      operator: event.params.operator      ,
      approved: event.params.approved      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Hustler_ApprovalForAll.set(hustler_ApprovalForAllEntity);
});
    HustlerContract_MetadataUpdate_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    HustlerContract_MetadataUpdate_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    hustler_MetadataUpdateCount: currentSummaryEntity.hustler_MetadataUpdateCount + BigInt(1),
  };

  const hustler_MetadataUpdateEntity: Hustler_MetadataUpdateEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      event_id: event.params.id      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Hustler_MetadataUpdate.set(hustler_MetadataUpdateEntity);
});
    HustlerContract_OwnershipTransferred_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    HustlerContract_OwnershipTransferred_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    hustler_OwnershipTransferredCount: currentSummaryEntity.hustler_OwnershipTransferredCount + BigInt(1),
  };

  const hustler_OwnershipTransferredEntity: Hustler_OwnershipTransferredEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      previousOwner: event.params.previousOwner      ,
      newOwner: event.params.newOwner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Hustler_OwnershipTransferred.set(hustler_OwnershipTransferredEntity);
});
    HustlerContract_TransferBatch_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    HustlerContract_TransferBatch_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    hustler_TransferBatchCount: currentSummaryEntity.hustler_TransferBatchCount + BigInt(1),
  };

  const hustler_TransferBatchEntity: Hustler_TransferBatchEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      operator: event.params.operator      ,
      from: event.params.from      ,
      to: event.params.to      ,
      ids: event.params.ids      ,
      values: event.params.values      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Hustler_TransferBatch.set(hustler_TransferBatchEntity);
});
    HustlerContract_TransferSingle_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    HustlerContract_TransferSingle_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    hustler_TransferSingleCount: currentSummaryEntity.hustler_TransferSingleCount + BigInt(1),
  };

  const hustler_TransferSingleEntity: Hustler_TransferSingleEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      operator: event.params.operator      ,
      from: event.params.from      ,
      to: event.params.to      ,
      event_id: event.params.id      ,
      value: event.params.value      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Hustler_TransferSingle.set(hustler_TransferSingleEntity);
});
    HustlerContract_URI_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    HustlerContract_URI_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    hustler_URICount: currentSummaryEntity.hustler_URICount + BigInt(1),
  };

  const hustler_URIEntity: Hustler_URIEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      value: event.params.value      ,
      event_id: event.params.id      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Hustler_URI.set(hustler_URIEntity);
});
    InitiatorContract_Opened_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    InitiatorContract_Opened_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    initiator_OpenedCount: currentSummaryEntity.initiator_OpenedCount + BigInt(1),
  };

  const initiator_OpenedEntity: Initiator_OpenedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      event_id: event.params.id      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Initiator_Opened.set(initiator_OpenedEntity);
});
    InitiatorContract_OwnershipTransferred_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    InitiatorContract_OwnershipTransferred_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    initiator_OwnershipTransferredCount: currentSummaryEntity.initiator_OwnershipTransferredCount + BigInt(1),
  };

  const initiator_OwnershipTransferredEntity: Initiator_OwnershipTransferredEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      previousOwner: event.params.previousOwner      ,
      newOwner: event.params.newOwner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Initiator_OwnershipTransferred.set(initiator_OwnershipTransferredEntity);
});
    PaperContract_Approval_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    PaperContract_Approval_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    paper_ApprovalCount: currentSummaryEntity.paper_ApprovalCount + BigInt(1),
  };

  const paper_ApprovalEntity: Paper_ApprovalEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      owner: event.params.owner      ,
      spender: event.params.spender      ,
      value: event.params.value      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Paper_Approval.set(paper_ApprovalEntity);
});
    PaperContract_DelegateChanged_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    PaperContract_DelegateChanged_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    paper_DelegateChangedCount: currentSummaryEntity.paper_DelegateChangedCount + BigInt(1),
  };

  const paper_DelegateChangedEntity: Paper_DelegateChangedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      delegator: event.params.delegator      ,
      fromDelegate: event.params.fromDelegate      ,
      toDelegate: event.params.toDelegate      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Paper_DelegateChanged.set(paper_DelegateChangedEntity);
});
    PaperContract_DelegateVotesChanged_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    PaperContract_DelegateVotesChanged_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    paper_DelegateVotesChangedCount: currentSummaryEntity.paper_DelegateVotesChangedCount + BigInt(1),
  };

  const paper_DelegateVotesChangedEntity: Paper_DelegateVotesChangedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      delegate: event.params.delegate      ,
      previousBalance: event.params.previousBalance      ,
      newBalance: event.params.newBalance      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Paper_DelegateVotesChanged.set(paper_DelegateVotesChangedEntity);
});
    PaperContract_OwnershipTransferred_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    PaperContract_OwnershipTransferred_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    paper_OwnershipTransferredCount: currentSummaryEntity.paper_OwnershipTransferredCount + BigInt(1),
  };

  const paper_OwnershipTransferredEntity: Paper_OwnershipTransferredEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      previousOwner: event.params.previousOwner      ,
      newOwner: event.params.newOwner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Paper_OwnershipTransferred.set(paper_OwnershipTransferredEntity);
});
    PaperContract_Snapshot_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    PaperContract_Snapshot_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    paper_SnapshotCount: currentSummaryEntity.paper_SnapshotCount + BigInt(1),
  };

  const paper_SnapshotEntity: Paper_SnapshotEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      event_id: event.params.id      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Paper_Snapshot.set(paper_SnapshotEntity);
});
    PaperContract_Transfer_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    PaperContract_Transfer_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    paper_TransferCount: currentSummaryEntity.paper_TransferCount + BigInt(1),
  };

  const paper_TransferEntity: Paper_TransferEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      from: event.params.from      ,
      to: event.params.to      ,
      value: event.params.value      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Paper_Transfer.set(paper_TransferEntity);
});
    SwapMeetContract_ApprovalForAll_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SwapMeetContract_ApprovalForAll_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    swapMeet_ApprovalForAllCount: currentSummaryEntity.swapMeet_ApprovalForAllCount + BigInt(1),
  };

  const swapMeet_ApprovalForAllEntity: SwapMeet_ApprovalForAllEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      account: event.params.account      ,
      operator: event.params.operator      ,
      approved: event.params.approved      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SwapMeet_ApprovalForAll.set(swapMeet_ApprovalForAllEntity);
});
    SwapMeetContract_OwnershipTransferred_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SwapMeetContract_OwnershipTransferred_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    swapMeet_OwnershipTransferredCount: currentSummaryEntity.swapMeet_OwnershipTransferredCount + BigInt(1),
  };

  const swapMeet_OwnershipTransferredEntity: SwapMeet_OwnershipTransferredEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      previousOwner: event.params.previousOwner      ,
      newOwner: event.params.newOwner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SwapMeet_OwnershipTransferred.set(swapMeet_OwnershipTransferredEntity);
});
    SwapMeetContract_SetRle_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SwapMeetContract_SetRle_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    swapMeet_SetRleCount: currentSummaryEntity.swapMeet_SetRleCount + BigInt(1),
  };

  const swapMeet_SetRleEntity: SwapMeet_SetRleEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      event_id: event.params.id      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SwapMeet_SetRle.set(swapMeet_SetRleEntity);
});
    SwapMeetContract_TransferBatch_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SwapMeetContract_TransferBatch_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    swapMeet_TransferBatchCount: currentSummaryEntity.swapMeet_TransferBatchCount + BigInt(1),
  };

  const swapMeet_TransferBatchEntity: SwapMeet_TransferBatchEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      operator: event.params.operator      ,
      from: event.params.from      ,
      to: event.params.to      ,
      ids: event.params.ids      ,
      values: event.params.values      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SwapMeet_TransferBatch.set(swapMeet_TransferBatchEntity);
});
    SwapMeetContract_TransferSingle_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SwapMeetContract_TransferSingle_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    swapMeet_TransferSingleCount: currentSummaryEntity.swapMeet_TransferSingleCount + BigInt(1),
  };

  const swapMeet_TransferSingleEntity: SwapMeet_TransferSingleEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      operator: event.params.operator      ,
      from: event.params.from      ,
      to: event.params.to      ,
      event_id: event.params.id      ,
      value: event.params.value      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SwapMeet_TransferSingle.set(swapMeet_TransferSingleEntity);
});
    SwapMeetContract_URI_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SwapMeetContract_URI_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    swapMeet_URICount: currentSummaryEntity.swapMeet_URICount + BigInt(1),
  };

  const swapMeet_URIEntity: SwapMeet_URIEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      value: event.params.value      ,
      event_id: event.params.id      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SwapMeet_URI.set(swapMeet_URIEntity);
});
