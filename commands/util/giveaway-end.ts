import { CommandInteraction } from "discord.js";
import { Command as BaseCommand, GuildConfig } from "../../types";
import { client } from "../../index";
import Sender from "../../util/custom/Sender";

const lang = new LanguageHandler("en");

export default class Command implements BaseCommand {
    public readonly name = "giveaway-end";
    public readonly description = lang.getStatic(`DESC_${this.name.split("-").join("").toUpperCase()}`);
    public readonly pexes = [ "global.access", "commands.util.giveaway.end" ];
    public readonly options = [
        {
            type: 3,
            name: "message_id",
            description: lang.setLanguage("en").get("OPT_GEND_MESSAGEID_DESC"),
            required: true
        }
    ];
    public readonly usage = lang.getStatic(`USAGE_${this.name.split("-").join("").toUpperCase()}`);
    public readonly category = "util";
    public async run(interaction: CommandInteraction, guildConfig: GuildConfig) {
        const sender = new Sender(interaction.channel, guildConfig.language!);

        lang.setLanguage(guildConfig.language!);

        const giveaway = await client.database.giveaways.get(interaction.options.getString("message_id")!);

        if (!giveaway || giveaway.ended) return await interaction.followUp({
            embeds: [sender.error(lang.get("DATA_COMMANDS_GEND_INVALIDGIVEAWAY"))]
        })

        await client.database.giveaways.reroll(giveaway);
        await client.database.giveaways.remove(giveaway.messageID);
        await interaction.followUp({
            embeds: [sender.success(lang.get("DATA_COMMANDS_GEND_SUCCESS"))]
        })
    }
}