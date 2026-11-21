// ContentView.swift — sample screens in the Mars skill
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
                        Text("01 / SUPPORT").font(MarsType.mono()).foregroundStyle(Color.brandMuted)
                        Text("Support that answers, not deflects.").font(MarsType.display(28))
                        Text("Mars reads the whole thread, checks the account and replies with the specific answer — four in five conversations close without a hand-off.").foregroundStyle(Color.brandInk2)
                        Button("Try Mars") {}.buttonStyle(PrimaryButtonStyle()).padding(.top, 4)
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
            .navigationTitle("Mars")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                // The brand logo leads every screen: add the skill's logo SVG to Assets.xcassets as "BrandLogo" (Preserve Vector Data on)
                ToolbarItem(placement: .principal) { HStack(spacing: 8) { Image("BrandLogo").resizable().scaledToFit().frame(height: 22); Text("Mars").font(MarsType.display(17)) } }
                ToolbarItem(placement: .topBarTrailing) { Button { } label: { Image(systemName: "plus") } }
            }
        }
    }
}
