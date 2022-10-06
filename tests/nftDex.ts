import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { NftDex } from "../target/types/nft_dex";

describe("nftDex", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.NftDex as Program<NftDex>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
