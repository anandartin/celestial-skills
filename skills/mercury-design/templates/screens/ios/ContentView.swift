// ContentView.swift — sample screens in the Mercury skill
import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView {
            HomeView().tabItem { Label("Home", systemImage: "house") }
            Text("Search").tabItem { Label("Search", systemImage: "magnifyingglass") }
            Text("Inbox").tabItem { Label("Inbox", systemImage: "tray") }
            Text("Profile").tabItem { Label("Profile", systemImage: "person") }
        }
        .tint(Color.brandAccent)
    }
}

struct HomeView: View {
    var body: some View {
        NavigationStack {
            List {
                Section {
                    VStack(alignment: .leading, spacing: 8) {
                        Text("Agents").font(MercuryType.mono()).foregroundStyle(Color.brandMuted)
                        Text("Agents you can watch and approve.").font(MercuryType.display(28))
                        Text("Set up an agent, see every step it takes, and approve anything that matters before it happens.").foregroundStyle(Color.brandInk2)
                        Button("Build an agent") {}.buttonStyle(PrimaryButtonStyle()).padding(.top, 4)
                    }
                    .padding(.vertical, 8)
                    .listRowBackground(Color.brandSurface)
                }
                Section("Recent") {
                    ForEach(["Northwind Traders", "Acme Corp", "Globex"], id: \.self) { name in
                        HStack { Text(name); Spacer(); Text("Active").font(.caption).foregroundStyle(Color.brandOnAccent).padding(.horizontal, 8).padding(.vertical, 3).background(Color.brandAccent, in: Capsule()) }
                    }
                }
            }
            .scrollContentBackground(.hidden)
            .background(Color.brandBackground)
            .navigationTitle("Mercury")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                // The brand logo leads every screen: add the skill's logo SVG to Assets.xcassets as "BrandLogo" (Preserve Vector Data on)
                ToolbarItem(placement: .principal) { HStack(spacing: 8) { Image("BrandLogo").resizable().scaledToFit().frame(height: 22); Text("Mercury").font(MercuryType.display(17)) } }
                ToolbarItem(placement: .topBarTrailing) { Button { } label: { Image(systemName: "plus") } }
            }
        }
    }
}
