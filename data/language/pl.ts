export default {
    data: {
        addons: {
            botWelcomeText: "Cześć! Jestem Touji, wielofunkcyjny bot na Discorda.\nIlość komend: **{{commandsSize}}**.",
            mentionReplyText: "Cześć! Możesz użyć moich komend klikając **`/`**."
        },
        commands: {
            help: {
                invalid: "Nieprawidłowa komenda",
                commandInfo: "Informacje o komendzie **{{commandName}}**:",
                requiredPermissions: "Wymagane uprawnienia"
            },
            appinfo: {
                invalidApp: "Nieprawidłowe ID aplikacji",
                guildCount: "Ilość serwerów"
            },
            userinfo: {
                accountCreated: "Konto stworzone w dniu",
                isBot: "Jest botem?",
                roles: "Role",
                topRole: "Najwyższa rola",
                birthdayDate: "Data urodzenia"
            },
            serverinfo: {
                createdAt: "Stworzono w dniu",
                memberCount: "Liczba użytkowników",
                features: "Dodatki",
                boosts: "Boosty",
                guildFeatures: {
                    ANIMATEDICON: "Animowana ikona",
                    BANNER: "Baner",
                    COMMERCE: "Sklep",
                    COMMUNITY: "Community",
                    DISCOVERABLE: "Znajduje się w Server Discovery",
                    FEATURABLE: "Featurable",
                    INVITESPLASH: "Banner zaproszenia",
                    MEMBERVERIFICATIONGATEENABLED: "Sprawdzanie członków",
                    MONETIZATIONENABLED: "Monetyzacja włączona",
                    MORESTICKERS: "Więcej miejsca na stickersy",
                    NEWS: "Kanały ogłoszeniowe",
                    PARTNERED: "Discord Partner",
                    PREVIEWENABLED: "Podgląd włączony",
                    PRIVATETHREADS: "Prywatne thready",
                    THREADSENABLED: "Thready włączone",
                    SEVENDAYTHREADARCHIVE: "7-dniowe archiwum dla threadów",
                    THREEDAYTHREADARCHIVE: "3-dniowe archiwum dla threadów",
                    TICKETEDEVENTSENABLED: "Eventy",
                    VANITYURL: "Vanity URL",
                    VERIFIED: "Zweryfikowana",
                    VIPREGIONS: "Regiony VIP",
                    WELCOMESCREENENABLED: "Ekran powitalny włączony",
                    NEWTHREADPERMISSIONS: "Nowe uprawnienia dla threadów"
                }
            },
            case: {
                invalid: "Nieprawidłowe ID case",
                user: "Użytkownik",
                moderator: "Moderator"
            },
            setReason: {
                invalid: "Nieprawidłowe ID case",
                tooBig: "Powód jest za długo",
                changed: "Pomyślnie zmieniono powód case `{{case}}` na `{{reason}}`."
            },
            history: {
                noCases: {
                    me: "Nie posiadasz żadnego ostrzeżenia",
                    user: "Ten użytkownik nie posiada żadnego ostrzeżenia"
                },
                cantSeeOther: "Nie możesz sprawdzać case innych użytkowników"
            },
            kick: {
                invalidUser: "Ten użytkownik nie jest na tym serwerze",
                noBotPermissions: "Nie posiadam uprawnień aby wyrzucić tego użytkownika",
                noUserPermissions: "Nie możesz wyrzucić tego użytkownika",
                reasonTooLong: "Powód jest za długi",
                success: "Pomyślnie wyrzucono `{{user}}` z powodem {{reason}}.",
                successUser: "Zostałeś wyrzucony z serwera `{{guildName}}`",
                dmSent: "Wysłano wiadomość na DM?",
                caseID: "Case ID"
            },
            ban: {
                invalidUser: "Nie znaleziono takiego użytkownika",
                noBotPermissions: "Nie posiadam uprawnień aby zbanować tego użytkownika",
                noUserPermissions: "Nie możesz wyrzucić tego użytkownika",
                reasonTooLong: "Powód jest za długi",
                success: "Pomyślnie zbanowano użytkownika `{{user}}` z powodem {{reason}}.",
                successUser: "Zostałeś zbanowany na serwerze `{{guildName}}`",
                dmSent: "Wysłano wiadomość na DM?",
                caseID: "Case ID",
                invalidTime: "Nieprawidłowy czas",
                time: "Czas zakończenia",
                alreadyBanned: "Ten użytkownik jest już zbanowany"
            },
            unban: {
                invalidUser: "Nie znaleziono takiego użytkownika",
                noBotPermissions: "Nie posiadam uprawnień aby odbanować tego użytkownika",
                reasonTooLong: "Powód jest za długi",
                success: "Pomyślnie odbanowano użytkownika `{{user}}` z powodem {{reason}}.",
                successUser: "Zostałeś odbanowany na serwerze `{{guildName}}`",
                dmSent: "Wysłano wiadomość na DM?",
                caseID: "Case ID",
                alreadyUnbanned: "Ten użytkownik nie jest zbanowany"
            },
            warn: {
                invalidUser: "Nie znaleziono takiego użytkownika na tym serwerze",
                noUserPermissions: "Nie możesz ostrzec tej osoby",
                reasonTooLong: "Powód jest za długi",
                success: "Pomyślnie ostrzeżono użytkownika `{{user}}` z powodem {{reason}}.",
                successUser: "Zostałeś ostrzeżony na serwerze `{{guildName}}`",
                dmSent: "Wysłano wiadomość na DM?",
                caseID: "Case ID",
                yourself: "Nie możesz zwarnować samego siebie",
                failed: "Wystąpił błąd"
            },
            deleteCase: {
                invalid: "Podano nieprawidłowy identyfikator case",
                own: "Nie możesz usunąć własnych kar",
                success: "Pomyślnie usunięto case `{{id}}`.",
                promptText: "Czy na pewno chcesz usunąć case o ID `{{id}}`?"
            },
            embed: {
                invalidHEX: "Nieprawidłowy kolor HEX",
                invalidURL: "Nieprawidłowy URL",
                ask: "Tak wygląda Twój embed. Czy potwierdzasz jego wysłanie?",
                titleTooLong: "Tytuł jest za długi",
                descTooLong: "Opis jest za długi",
                footerTooLong: "Footer jest za długi"
            },
            choose: {
                notEnough: "Za mało opcji (min. 2)",
                choosen: "Wybieram... **{{answer}}**!"
            },
            eightBall: {
                answers: ["Tak!", "Nie!", "Chyba tak!", "Chyba nie!", "Nie wiem!", "Daj mi chwilę..."],
                invalid: "Pytanie jest nieprawidłowe",
                question: "Pytanie",
                answer: "Odpowiedź"
            },
            giveaway: {
                prizes: ["Nowa koszulka", "Nowa, ekskluzywna ranga", "Dostęp do kanałów personelu"],
                invalidTime: "Nieprawidłowy czas",
                invalidChannel: "Nieprawidłowy kanał",
                tooLongPrize: "Nagroda może zawierać tylko 200 znaków",
                started: "Zareaguj :tada: aby mieć szanse na wygraną!",
                prize: "Nagroda",
                host: "Stworzone przez",
                time: "Koniec giveawaya",
                winners: "Liczba zwycięzców",
                createdIn: "Utworzono nowy giveaway w {{channel}}."
            },
            greroll: {
                invalidGiveaway: "Nieprawidłowy giveaway lub giveaway, który się nie zakończył",
                success: "Pomyślnie wybrano nowych zwycięzców tego giveawaya."
            },
            gend: {
                invalidGiveaway: "Nieprawidłowy giveaway lub giveaway zakończony",
                success: "Pomyślnie zakończono tego giveawaya."
            },
            birthday: {
                alreadySetted: "Ustawiłeś już swoją datę urodzin na **{{day}}**.**{{month}}**. **Nie możesz** tego zmienić.",
                invalidDate: "Nieprawidłowa data",
                updated: "Ustawiono Twoją datę urodzin na **{{day}}**.**{{month}}**",
                noneNext: "Niestety, nikt nie urodził się w tym miesiącu.",
                noneToday: "Niestety, nikt dziś się nie urodził.",
                noData: "Użytkownik **{{user}}** nie ustawił swojej daty urodzenia",
                date: "Użytkownik **{{user}}** ma urodziny <t:{{time}}:R>."
            },
            rps: {
                invalidUser: "Nieprawidłowy użytkownik",
                cannotPlay: "Ten użytkownik nie zagra z Tobą, ponieważ jest offline.",
                move: "Ruch {{user}}!",
                results: "Zwycięzca: {{winner}}\nPrzegryw: {{loser}}",
                tie: "Remis!",
                withUs: "Nie możesz grać z samym sobą.",
                waiting: "Oczekiwanie na akceptację gry przez użytkownika {{user}}..."
            },
            config: {
                invalidChannel: "Nieprawidłowy kanał",
                changed: "Pomyślnie ustawiono {{changed}} na {{new}}.",
                modLogChannel: "Kanał logów moderacyjnych",
                birthdaysChannel: "Kanał urodzin",
                welcomeStatus: "Status modułu powitań",
                welcomeChannel: "Kanał powitań",
                welcomeMessage: "Wiadomość powitalna",
                language: "Język",
                invalidWelcomeMessage: "Wiadomość powitalna nie może zawierać więcej niż 300 znaków",
                goodbyeStatus: "Status modułu pożegnań",
                goodbyeChannel: "Kanał pożegnań",
                goodbyeMessage: "Wiadomość pożegnalna",
                invalidGoodbyeMessage: "Wiadomość powitalna nie może zawierać więcej niż 300 znaków",
                variables: "{{user}} - wzmianka użytkownika\n{{user:id}} - ID użytkownika\n{{user:name}} - nazwa użytkownika\n{{user:tag}} - tag użytkownika\n{{guild:id}} - ID serwera\n{{guild:name}} - nazwa serwera\n{{guild:ownerID}} - ID właściciela serwera\n\n{{level}} - poziom użytkownika (Tylko levelling)",
                starboardStatus: "Status starboardu",
                starboardChannel: "Kanał starboardu",
                starboardStarCount: "Liczba gwiazdek starboardu",
                snipeStatus: "Status modułu snipe",
                starboardBans: "Zbanowani użytkownicy (starboard)",
                invalidStarCount: "Liczba gwiazdek jest mniejsza niż 1 lub większa niż ilość osób na tym serwerze",
                levellingStatus: "Status modułu poziomów",
                levellingChannel: "Kanał poziomów",
                levellingMessage: "Wiadomość o nowym poziomie",
                levellingNeededXP: "Potrzebne XP do zdobycia nowego poziomu",
                autoroles: "Autorole",
                suggestionsChannel: "Kanał propozycji",
                invalidLevellingMessage: "Wiadomość o nowym poziomie nie może zawierać więcej niż 300 znaków",
                invalidLevellingNeededXP: "Liczba XP wymaganego do zdobycia nowego poziomu musi być większa niż 10 i mniejsza niż 1000",
                theSameLanguage: "Ten język jest już ustawiony"
            },
            autorole: {
                alreadyAdded: "Ta rola jest już autorolą",
                notAdded: "Ta rola nie jest autorolą",
                dontHavePermissions: "Nie posiadasz uprawnień do zarządzania tą rolą",
                added: "Pomyślnie dodano autorolę o nazwie `{{roleName}}`.",
                removed: "Pomyślnie usunięto autorolę o nazwie `{{roleName}}`.",
                noAutoRoles: "Ten serwer nie posiada autoról",
                invalidRole: "Ta rola jest zarządzana"
            },
            roleRewards: {
                alreadyAdded: "Ta rola jest już nagrodą za poziom",
                notAdded: "Nie znaleziono takiej nagrody za poziom",
                dontHavePermissions: "Nie posiadasz uprawnień do zarządzania tą rolą",
                added: "Pomyślnie dodano nagrodę za poziom `{{level}}`",
                removed: "Pomyślnie usunięto nagrodę za poziom `{{level}}`",
                noRoles: "Ten serer nie posiada nagród za poziomy",
                invalidRole: "Ta rola jest zarządzana",
                invalidLevel: "Poziom musi być większy od 0 i mniejszy lub równy 100"
            },
            snipe: {
                notEnabled: "Snipe na tym serwerze jest wyłączone",
                none: "Nie znaleziono wiadomości z tym indexem",
                oldContent: "Stara treść",
                content: "Treść",
                author: "Autor",
                type: "Typ",
                dontHavePermissions: {
                    seeUser: "Nie posiadasz uprawnień do wyświetlania wiadomości innych użytkowników",
                    delUser: "Nie posiadasz uprawnień do usuwania historii snipe użytkowników",
                    delChannel: "Nie posiadasz uprawnień do usuwania historii snipe tego kanału"
                },
                deletedByUser: "Pomyślnie usunięto historię snipe tego użytkownika",
                deletedByChannel: "Pomyślnie usunięto historię snipe tego kanału"
            },
            pornhub: {
                tooLong: "Przynajmniej jedna z części tekstu jest za długa"
            },
            supreme: {
                tooLong: "Tekst jest za długi"
            },
            starboard: {
                noBest: "**{{user}}** nie posiada najlepszej wiadomości",
                invalidUser: "Nieprawidłowy użytkownik",
                alreadyBanned: "Ten użytkownik jest już zbanowany",
                banned: "Pomyślnie zbanowano **{{user}}** ze starboardu",
                notBanned: "Ten użytkownik nie jest zbanowany",
                unbanned: "Pomyślnie odbanowano **{{user}}** ze starboardu",
                noPermissions: "Nie posiadasz uprawnień aby {{to}} tego użytkownika",
                banSomeone: "Nie możesz zbanować siebie",
                bestMessage: "Najlepsza wiadomość użytkownika **{{user}}** na serwerze {{guild}}:\n[kliknij]({{url}}).\n\nTa wiadomość zawiera {{starCount}} gwiazdek."
            },
            reminder: {
                invalidTime: "Nieprawidłowy czas",
                invalidContent: "Treść przypomnienia nie została podana lub jest za długa",
                invalidID: "Nie znaleziono remindera z tym ID",
                created: "Pomyślnie stworzono reminder z ID **{{id}}**",
                revoked: "Pomyślnie usunięto reminder z ID **{{id}}**",
                none: "Nie posiadasz przypomnień"
            },
            ticket: {
                createTicket: "Stwórz ticket",
                sent: "Pomyślnie wysłano wiadomość ticketową",
                invalidChannelType: "Kanał musi być tekstowy",
                invalidCategory: "Nieprawidłowa kategoria",
                invalidChannel: "Nieprawidłowy kanał ticketów",
                invalidText: "Tekst wiadomości ticketu nie może być dłuższy niż 2000 znaków",
                invalidMessage: "Touji musi być autorem wiadomości. Stwórz nowy embed używając komendy **`/embed`**.",
                notConfigured: {
                    channel: "Nie skonfigurowano kanału ticketów",
                    category: "Nie skonfigurowano kategorii ticketów",
                    message: "Nie skonfigurowano wiadomości ticketów",
                    text: "Nie skonfigurowano tekstu ticketów"
                },
                changed: {
                    message: "Pomyślnie zmieniono ID wiadomości ticketu na `{{id}}`",
                    channel: "Pomyślnie zmieniono kanał ticketu na `{{channel}}`",
                    category: "Pomyślnie zmieniono kategorię ticketów na `{{category}}`",
                    status: "Pomyślnie zmieniono status ticketów na **`{{status}}`**.",
                    text: "Pomyślnie ustawiono tekst ticketów na:\n\n{{text}}"
                }
            },
            balance: {
                bot: "Boty nie są częścią ekonomii",
                cash: "Portfel",
                bank: "Bank",
                total: "Łącznie"
            },
            addMoney: {
                invalidAmount: "Nieprawidłowa ilość pieniędzy",
                success: "Pomyślnie dodano `{{money}}$` do {{user}}"
            },
            removeMoney: {
                invalidAmount: "Nieprawidłowa ilość pieniędzy",
                success: "Pomyślnie zabrano `{{money}}$` od {{user}}"
            },
            deposit: {
                invalidAmount: "Nieprawidłowa ilość pieniędzy",
                success: "Pomyślnie przelano `{{money}}$` do banku."
            },
            withdraw: {
                invalidAmount: "Nieprawidłowa ilość pieniędzy",
                success: "Successfully wypłacono `{{money}}$` z banku."
            },
            work: {
                messages: [
                    "Pracowałeś w klubie i zdobyłeś {{amount}}$",
                    "Odkryłeś nowy pierwiastek chemiczny i otrzymałeś {{amount}}$",
                    "Wygrałeś konkurs jedzenia na czas. Zarobiłeś {{amount}}$!",
                    "Pracowałeś 2 godziny w lokalnym McDonaldzie. Zarobiłeś {{amount}}$.",
                    "Pracujesz jako ambasador marki Touji i zarabiasz {{amount}}$.",
                    "Sprzedałeś soczewki i zarobiłeś {{amount}}$.",
                    "Do kodu dodałeś samozniszczenie komputera, jeśli nie masz licencji! Twój szef cię nagrodził {{amount}}$."
                ]
            },
            createItem: {
                steps: {
                    1: "Wybierz nazwę swojego przedmiotu. **Nie może ona zawierać więcej niż 50 znaków**.",
                    2: "Wybierz opis swojego przedmiotu. **Nie może on zawierać więcej niż 150 znaków**.",
                    3: "Wybierz cenę swojego przedmiotu. Musi być większa niż 1 i mniejsza lub równa 1 000 000.",
                    4: "Wpisz rolę, która ma być przypisana po zakupie przedmiotu. Nawet jeśli nie podasz prawidłowej roli w tym momencie, to i tak nie przejdzie, ponieważ walidator odrzuci twoją odpowiedź. Jeśli nie chcesz dodawanej roli, wpisz none.",
                    5: "Wprowadź rolę, która ma zostać usunięta po zakupie przedmiotu. Nawet jeśli nie podasz prawidłowej roli w tym momencie, to i tak nie przejdzie, ponieważ walidator odrzuci twoją odpowiedź. Jeśli nie chcesz zabieranej roli, wpisz none."
                },
                invalidName: "Nieprawidłowa nazwa przedmiotu",
                invalidRole: "Podano nieprawidłową rolę. Spróbuj wpisać identyfikator roli.",
                invalidPrice: "Nieprawidłowa cena przedmiotu",
                alreadyExists: "Przedmiot z taką nazwą już istnieje",
                success: "Pomyślnie utworzono nowy przedmiot o ID **{{id}}**"
            },
            shop: {
                none: "Niestety nikt jeszcze nie dodał żadnych przedmiotów. Można to zrobić za pomocą komendy **`/create-item`**."
            },
            deleteItem: {
                none: "Podano nieprawidłowe ID",
                areYouSure: "Czy na pewno chcesz usunąć przedmiot z ID **{{id}}**?",
                success: "Pomyślnie usunięto przedmiot o ID **{{id}}**"
            },
            inventory: {
                none: "Nie posiadasz przedmiotów w swoim ekwipunku."
            },
            buyItem: {
                invalidItem: "Podano nieprawidłowe ID",
                notEnoughWallet: "Nie masz wystarczającej ilości pieniędzy w portfelu. Potrzebujesz dodatkowych **{{amount}}$**.",
                success: "Pomyślnie kupiłeś ten przedmiot"
            },
            clearInventory: {
                invalidMember: "Ten użytkownik nie jest na tym serwerze",
                success: "Pomyślnie wyczyszczono ekwipunek tego użytkownika"
            },
            rob: {
                unknownUser: "Ten użytkownik nie jest na tym serwerze",
                notEnoughMoney: "Użytkownik musi mieć w portfelu co najmniej 10$",
                fail: "Nie udało Ci się okraść {{user}}, ty złodziejaszku!. Tracisz {{change}}$.",
                success: "Pomyślnie okradłeś {{user}} i zyskałeś na tym {{change}}$.",
                withUs: "Próbujesz okraść samego siebie. ~~czy to legalne~~?",
                bot: "Nie możesz okraść bota."
            },
            itemInfo: {
                description: "Opis",
                price: "Cena",
                givenRole: "Rola dodawana po zakupie",
                removedRole: "Rola odbierana po zakupie"
            },
            reload: {
                invalid: "Nie znaleziono takiej komendy",
                success: {
                    all: "Pomyślnie przeładowano wszystkie komendy",
                    command: "Pomyślnie przeładowano tą komendę"
                }
            },
            editItem: {
                noneProvided: "Hej ty! Chcesz mnie oszukać? Nie ma mowy! Wpisz co najmniej jedną opcję do zmiany",
                invalid: {
                    name: "Nieprawidłowa nazwa",
                    description: "Nieprawidłowy opis",
                    price: "Nieprawidłowa cena"
                },
                errors: "Wystąpiły błędy podczas wykonywania komendy:\n{{errors}}",
                success: "Pomyślnie zaktualizowano te opcje:\n\n{{replaced}}"
            },
            editEmbed: {
                noneProvided: "Hej ty! Chcesz mnie oszukać? Nie ma mowy! Wpisz co najmniej jedną opcję do zmiany",
                invalidMessage: "Nieprawidłowe ID wiadomości",
                invalidMessageAuthor: "Touji musi być autorem tej wiadomości",
                invalid: {
                    title: "Nieprawidłowy tytuł",
                    description: "Nieprawidłowy opis",
                    footer: "Nieprawidłowy footer",
                    color: "Nieprawidłowy kolor",
                    imageURL: "Nieprawidłowy URL zdjęcia",
                    thumbnailURL: "Nieprawidłowy thumbnail URL",
                    url: "Nieprawidłowy URL"
                },
                errors: "Wystąpiły błędy podczas wykonywania komendy:\n{{errors}}",
                success: "Pomyślnie zaktualizowano te opcje:\n\n{{replaced}}"
            },
            rank: {
                disabled: "System poziomów na tym serwerze jest wyłączony",
                bot: "Nie możesz sprawdzać rang botów. Boty nie są częścią levellingu."
            },
            levelsLeaderboard: {
                disabled: "System poziomów na tym serwerze jest wyłączony",
                noLeaderboard: "Na tym serwerze nie ma leaderboardu levellingu"
            },
            setLevel: {
                disabled: "System poziomów na tym serwerze jest wyłączony",
                invalidUser: "Nie znaleziono takiego użytkownika na tym serwerze",
                invalidLevel: "Poziom musi być większy niż 0 i mniejszy niż 100",
                noUserPermissions: "Nie posiadasz uprawnień do zarządzania tym członkiem",
                success: "{{user}} posiada teraz poziom {{level}}"
            },
            setXP: {
                disabled: "System poziomów na tym serwerze jest wyłączony",
                invalidUser: "Nie znaleziono takiego użytkownika na tym serwerze",
                invalidXP: "XP musi być większe niż 0 i mniejsze niż {{guildRequiredXP}}",
                noUserPermissions: "Nie posiadasz uprawnień do zarządzania tym członkiem",
                success: "{{user}} posiada teraz {{xp}} XP"
            },
            economyLeaderboard: {
                noLeaderboard: "Na tym serwerze nie ma leaderboardu ekonomii",
                mode: {
                    byWallet: "Sortuj na podstawie portfela",
                    byBank: "Sortuj na podstawie konta w banku"
                }
            },
            reactionRole: {
                invalidMessage: "Nieprawidłowe ID wiadomości",
                invalidRole: "Nieprawidłowa rola",
                invalidEmoji: "Nieprawidłowa emotka",
                alreadyExists: "Ta reactionrola już istnieje",
                failed: "Nie mogę dodać reakcji do tej wiadomości",
                successAdd: "Pomyślnie stworzono nową reactionrole",
                successRemove: "Pomyślnie usunięto tą reactionrole",
                invalidRR: "Nie znaleziono takiej reactionroli"
            },
            createTag: {
                tooLong: "Treść albo nazwa taga jest za długa"
            },
            permissions: {
                noGlobalPermissions: "Nie możesz zarządzać globalnymi uprawnieniami",
                allowedUser: "Uprawnienia dla tego użytkownika",
                allowedGroup: "Uprawnienia dla tej grupy",
                groupInvalid: "Nieprawidłowa grupa",
                groupNoPermissions: "Ta grupa nie ma zdefiniowanych uprawnień",
                userNoPermissions: "Ten użytkownik nie ma zdefiniowanych uprawnień",
                noPermissions: "Nie posiadasz uprawnień",
                cantEdit: "Nie możesz edytować uprawnień których sam nie posiadasz",
                groupAlreadyExists: "Grupa z tą nazwą już istnieje",
                alreadyHasPermissions: "Ten użytkownik ma już uprawnienia `{{pex}}`",
                doesNotHavePermissions: "Ten użytkownik nie posiada uprawnień `{{pex}}`",
                invalidUser: "Nieprawidłowy użytkownik",
                invalidPEX: "Nieprawidłowy PEX",
                inGroup: "Ten użytkownik jest już w tej grupie",
                notInGroup: "Ten użytkownik nie należy do tej grupy",
                success: {
                    addToGroup: "Pomyślnie dodano tego użytkownika do grupy `{{name}}`",
                    removeFromGroup: "Pomyślnie usunięto tego użytkownika z grupy `{{name}}`",
                    createGroup: "Pomyślnie utworzono nową grupę o nazwie `{{name}}`",
                    removeGroup: "Pomyślnie usunięto grupę o nazwie `{{name}}`",
                    addPEXToUser: "Pomyślnie dodano permisję `{{pex}}` dla tego użytkownika",
                    removedPEXFromUser: "Pomyślnie zabrano permisję `{{pex}}` dla tego użytkownika",
                    addPEXToGroup: "Pomyślnie dodano permisję `{{pex}}` dla tej grupy",
                    removedPEXFromGroup: "Pomyślnie zabrano permisję `{{pex}}` dla tej grupy",
                    addRoleToGroup: "Pomyślnie dodano rolę `{{role}}` dla tej grupy",
                    removedRoleFromGroup: "Pomyślnie zabrano rolę `{{role}}` dla tej grupy",
                    addGlobalPEX: "Pomyślnie dodano permisję `{{pex}}` dla wszystkich użytkowników",
                    removedGlobalPEX: "Pomyślnie zabrano permisję `{{pex}}` dla wszystkich użytkowników",
                },
                error: {
                    addPEXToGroup: "Ta grupa ma już uprawnienia `{{pex}}`",
                    removedPEXFromGroup: "Ta grupa nie ma uprawnień `{{pex}}`",
                    addRoleToGroup: "Ta grupa już dodała rolę `{{role}}`",
                    removedRoleFromGroup: "Ta grupa nie ma roli `{{role}}`",
                    addGlobalPEX: "Użytkownicy mają już uprawnienia `{{pex}}`",
                    removedGlobalPEX: "Użytkownicy nie mają uprawnienia `{{pex}}`",
                },
                tooLong: {
                    groupName: "Nazwa grupy jest za długa"
                },
                permissions: {
                    allowed: "Posiadane uprawnienia"
                }
            },
            pay: {
                invalidUser: "Ten użytkownik musi być na tym serwerze",
                theSameUser: "Nie możesz przelać pieniędzy do siebie",
                invalidAmount: "Nie masz tyle pieniędzy w swoim banku",
                success: "Pomyślnie przelałeś `{{amount}}$` do {{user}}"
            },
            lock: {
                thread: "Nie możesz zablokować threadu",
                success: {
                    server: "Aby zablokować/odblokować ten serwer, uruchom ponownie tą komendę.",
                    "*": "Aby zablokować/odblokować ten kanał, uruchom ponownie tą komendę."
                },
                error: "Nie można zablokować/odblokować tego kanału"
            },
            emojify: { tooLong: "Tekst jest za długi" },
            reverse: { tooLong: "Tekst jest za długi" },
            slotMachine: {
                waiting: "[ {{board}} ]\n\n**Oczekiwanie...**",
                win: "[ {{board}} ]\n\nBrawo, wygrałeś **{{amount}}$**",
                lost: "[ {{board}} ]\n\nNiestety, przegrałeś **{{amount}}$**"
            },
            lotto: {
                repeating: "Co najmniej jeden numer jest podany więcej niż 1 raz",
                invalidNumber: "Co najmniej jedna liczba jest mniejsza niż 0, większa niż 100, lub jest z przecinkiem.",
                success: "Gratulacje, wygrałeś **{{amount}}$**.\n\nWygrane liczby: {{numbers}}\nIlość trafionych liczb: **{{matching}}**.",
                lost: "Niestety, przegrałeś **{{amount}}$**.\n\nWygrane liczby: {{numbers}}\nIlość trafionych liczb: **{{matching}}**."
            },
            dick: { success: "Długość Twojego penisa wynosi **{{length}}cm**.\n\n**{{dick}}**" }
        }
    },
    /*opt: {
        help: {
            command: {
                desc: "Komenda"
            }
        },
        appinfo: {
            appid: {
                desc: "ID aplikacji"
            }
        },
        eval: {
            code: {
                desc: "Kod"
            },
            async: {
                desc: "Asynchroniczny eval czy synchroniczny?"
            }
        },
        shell: {
            code: {
                desc: "Kod do wykonania w konsoli"
            }
        },
        userinfo: {
            user: {
                desc: "Użytkownik"
            }
        },
        case: {
            id: {
                desc: "Case ID"
            }
        },
        setReason: {
            id: {
                desc: "Case ID"
            },
            reason: {
                desc: "Nowy powód"
            }
        },
        history: {
            user: {
                desc: "Użytkownik"
            }
        },
        kick: {
            user: {
                desc: "Użytkownik"
            },
            reason: {
                desc: "Powód"
            }
        },
        ban: {
            user: {
                desc: "Użytkownik"
            },
            time: {
                desc: "Time if ban is temporary"
            },
            reason: {
                desc: "Powód"
            }
        },
        unban: {
            user: {
                desc: "Użytkownik"
            },
            reason: {
                desc: "Powód"
            }
        },
        warn: {
            user: {
                desc: "Użytkownik"
            },
            reason: {
                desc: "Powód"
            }
        },
        deleteCase: {
            id: {
                desc: "Case ID"
            }
        },
        embed: {
            title: {
                desc: "Tytuł"
            },
            description: {
                desc: "Opis"
            },
            color: {
                desc: "Kolor"
            },
            footer: {
                desc: "Footer"
            },
            imageURL: {
                desc: "Image URL"
            },
            thumbnailURL: {
                desc: "Thumbnail URL"
            },
            url: {
                desc: "Embed URL"
            }
        },
        eightBall: {
            question: {
                desc: "Pytanie"
            }
        },
        giveaway: {
            time: {
                desc: "Czas zakończenia giveawaya"
            },
            channel: {
                desc: "Kanał tego giveawaya"
            },
            prize: {
                desc: "Nagroda w tym giveawayu"
            },
            winnerCount: {
                desc: "Liczba zwycięzców"
            }
        },
        greroll: {
            messageID: {
                desc: "ID wiadomości giveaway"
            }
        },
        gend: {
            messageID: {
                desc: "ID wiadomości giveaway"
            }
        },
        birthday: {
            set: {
                desc: "Zaaktualizuj swoją datę urodzin"
            },
            next: {
                desc: "Wyświetl użytkowników którzy mają urodziny w tym miesiącu"
            },
            day: {
                desc: "Dzień"
            },
            month: {
                desc: "Miesiąc"
            }
        },
        rps: {
            user: {
                desc: "Użytkownik"
            }
        },
        pornhub: {
            textOne: {
                desc: "Pierwszy tekst"
            },
            textTwo: {
                desc: "Drugi tekst"
            }
        },
        supreme: {
            text: {
                desc: "Tekst"
            },
            mode: {
                desc: "Tryb"
            }
        },
        config: {
            modLogChannel: {
                desc: "Zmień kanał logów moderacyjnych"
            },
            birthdayChannel: {
                desc: "Zmień kanał urodzin"
            },
            suggestionsChannel: {
                desc: "Kanał propozycji"
            },
            channel: {
                desc: "Kanał"
            },
            message: {
                desc: "Wiadomość"
            },
            display: {
                desc: "Wyświetl konfigurację serwera"
            },
            welcomeStatus: {
                desc: "Status modułu powitań"
            },
            welcomeChannel: {
                desc: "Kanał powitalny"
            },
            welcomeMessage: {
                desc: "Wiadomość powitalna"
            },
            goodbyeStatus: {
                desc: "Status modułu pożegnań"
            },
            goodbyeChannel: {
                desc: "Kanał pożegnalny"
            },
            goodbyeMessage: {
                desc: "Wiadomość pożegnalna"
            },
            starboardStatus: {
                desc: "Status starboardu"
            },
            starboardChannel: {
                desc: "Kanał starboardu"
            },
            starboardStars: {
                desc: "Ilość gwiazdek starboardu"
            },
            snipeStatus: {
                desc: "Status modułu snipe"
            },
            status: {
                desc: "Status"
            },
            variables: {
                desc: "Zmienne"
            },
            levellingStatus: {
                desc: "Status modułu poziomów"
            },
            levellingChannel: {
                desc: "Kanał poziomów"
            },
            levellingMessage: {
                desc: "Wiadomość o nowym poziomie"
            },
            levellingNeededXP: {
                desc: "XP potrzebne do zdobycia nowego poziomu"
            },
            xp: {
                desc: "XP"
            }
        },
        trash: {
            user: {
                desc: "Użytkownik"
            }
        },
        snipe: {
            user: {
                desc: "Użytkownik"
            },
            channel: {
                desc: "Kanał"
            },
            deleted: {
                desc: "Pokaż usunięte wiadomości"
            },
            edited: {
                desc: "Pokaż edytowane wiadomości"
            },
            index: {
                desc: "Index"
            },
            deleteUser: {
                desc: "Usuń historię snipe tego użytkownika"
            },
            deleteChannel: {
                desc: "Usuń historię snipe tego kanału"
            }
        },
        starboard: {
            top: {
                desc: "Pokaż najlepszą wiadomość użytkownika na starboardzie"
            },
            ban: {
                desc: "Zbanuj użytkownika ze starboardu"
            },
            unban: {
                desc: "Odbanuj użytkownika ze starboardu"
            },
            best: {
                desc: "Pokaż najlepszą wiadomość użytkownika na starboardzie"
            },
            banUser: {
                desc: "Użytkownik do zbanowania"
            },
            unbanUser: {
                desc: "Użytkownik do odbanowania"
            },
            bestUser: {
                desc: "Użytkownik"
            }
        },
        emojify: {
            text: {
                desc: "Tekst"
            }
        },
        reminder: {
            add: {
                desc: "Dodaj przypomnienie"
            },
            revoke: {
                desc: "Usuń przypomnienie"
            },
            list: {
                desc: "Wyświetl swoje przypomnienia"
            },
            time: {
                desc: "Czas"
            },
            content: {
                desc: "Treść"
            },
            id: {
                desc: "ID"
            }
        },
        ticket: {
            message: {
                desc: "Zmień wiadomość ticketu"
            },
            setChannel: {
                desc: "Zmień kanał ticketu"
            },
            setCategory: {
                desc: "Zmień kategorię ticketu"
            },
            setText: {
                desc: "Zmień tekst ticketu"
            },
            setStatus: {
                desc: "Zmień status modułu ticketów"
            },
            channel: {
                desc: "Kanał"
            },
            category: {
                desc: "Kategoria"
            },
            status: {
                desc: "Status modułu ticketów"
            },
            messageID: {
                desc: "ID wiadomości"
            },
            text: {
                desc: "Tekst"
            }
        },
        balance: {
            user: {
                desc: "Użytkownik"
            }
        },
        addMoney: {
            user: {
                desc: "Użytkownik"
            },
            money: {
                desc: "Ilość pieniędzy"
            },
            type: {
                desc: "Typ"
            }
        },
        removeMoney: {
            user: {
                desc: "Użytkownik"
            },
            money: {
                desc: "Ilość pieniędzy"
            },
            type: {
                desc: "Typ"
            }
        },
        deposit: {
            amount: {
                desc: "Ilość pieniędzy"
            }
        },
        withdraw: {
            amount: {
                desc: "Ilość pieniędzy"
            }
        },
        deleteItem: {
            id: {
                desc: "ID przedmiotu"
            }
        },
        buyItem: {
            id: {
                desc: "ID przedmiotu"
            }
        },
        clearInventory: {
            user: {
                desc: "Użytkownik"
            }
        },
        rob: {
            user: {
                desc: "Użytkownik"
            }
        },
        itemInfo: {
            id: {
                desc: "ID przedmiotu"
            }
        },
        reload: {
            commandName: {
                desc: "Nazwa komendy lub *"
            }
        },
        editItem: {
            id: {
                desc: "ID przedmiotu"
            },
            name: {
                desc: "Nowa nazwa"
            },
            description: {
                desc: "Nowy opis"
            },
            price: {
                desc: "Nowa cena"
            }
        },
        editEmbed: {
            channel: {
                desc: "Channel where embed is"
            },
            messageID: {
                desc: "Embed message ID"
            },
            title: {
                desc: "Nowy tytuł embeda"
            },
            description: {
                desc: "Nowy opis embeda"
            },
            color: {
                desc: "Nowy kolor embeda"
            },
            footer: {
                desc: "Nowy footer embeda"
            },
            imageURL: {
                desc: "Nowy URL zdjęcia embeda"
            },
            thumbnailURL: {
                desc: "Nowy thumbnail URL embeda"
            },
            url: {
                desc: "Nowy URL embeda"
            }
        },
        autorole: {
            add: {
                desc: "Stwórz autorolę"
            },
            remove: {
                desc: "Usuń autorolę"
            },
            list: {
                desc: "Wyświetl serwerowe autorole"
            },
            role: {
                desc: "Rola"
            }
        },
        roleRewards: {
            add: {
                desc: "Stwórz nagrodę za poziom"
            },
            remove: {
                desc: "Usuń nagrodę za poziom"
            },
            list: {
                desc: "Wyświetl serwerowe nagrody za poziomy"
            },
            role: {
                desc: "Rola"
            },
            level: {
                desc: "Poziom"
            }
        },
        rank: {
            user: {
                desc: "Użytkownik"
            }
        },
        setLevel: {
            user: {
                desc: "Użytkownik"
            },
            newLevel: {
                desc: "Nowy poziom"
            }
        },
        setXP: {
            user: {
                desc: "Użytkownik"
            },
            newXP: {
                desc: "Nowa ilość XP"
            }
        },
        economyLeaderboard: {
            mode: {
                desc: "Tryb sortowania"
            }
        },
        reactionRole: {
            add: {
                desc: "Stwórz reaction-rolę"
            },
            remove: {
                desc: "Usuń reaction-rolę"
            },
            channel: {
                desc: "Kanał gdzie znajduje się wiadomość"
            },
            messageID: {
                desc: "ID wiadomości"
            },
            role: {
                desc: "Rola do dodania"
            },
            emoji: {
                desc: "Emotka"
            }
        },
        permissions: {
            manageGroup: {
                desc: "Zarządzaj grupą"
            },
            addUserToGroup: {
                desc: "Dodaj użytkownika do grupy"
            },
            removeUserFromGroup: {
                desc: "Usuń użytkownika z grupy"
            },
            addGroup: {
                desc: "Stwórz grupę"
            },
            removeGroup: {
                desc: "Usuń grupę"
            },
            list: {
                desc: "Wyświetl uprawnienia grupy"
            },
            userManage: {
                desc: "Zarządzaj użytkownikiem"
            },
            addUser: {
                desc: "Dodaj uprawnienia dla użytkownika"
            },
            removeUser: {
                desc: "Zabierz uprawnienia od użytkownika"
            },
            getUser: {
                desc: "Wyświetl uprawnienia użytkownika"
            },
            addPermissionsToGroup: {
                desc: "Dodaj uprawnienia do grupy"
            },
            removePermissionsFromGroup: {
                desc: "Zabierz uprawnienia z grupy"
            },
            addRoleToGroup: {
                desc: "Dodaj rolę do grupy"
            },
            removeRoleFromGroup: {
                desc: "Zabierz rolę z grupy"
            },
            name: { desc: "Nazwa" },
            user: { desc: "Użytkownik" },
            pex: { desc: "PEX" },
            role: { desc: "Rola" }
        },
        pay: {
            user: { desc: "Użytkownik" },
            amount: { desc: "Ilość pieniędzy" }
        },
        lock: { server: { desc: "Zablokować serwer?" }},
        reverse: { text: { desc: "Tekst" }}
    }*/
};