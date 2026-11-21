// ContentView.swift — sample screens in the Jupiter Admin Kit skill
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
                        Text("Operations").font(JupiterAdminKitType.mono()).foregroundStyle(Color.brandMuted)
                        Text("Every admin screen, one calm kit.").font(JupiterAdminKitType.display(28))
                        Text("36 ready templates — overviews, tables, boards, records, forms and account pages — in the same shell, filters and numbers.").foregroundStyle(Color.brandInk2)
                        Button("Open the kit") {}.buttonStyle(PrimaryButtonStyle()).padding(.top, 4)
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
            .navigationTitle("Jupiter Admin Kit")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                // The brand logo leads every screen: add the skill's logo SVG to Assets.xcassets as "BrandLogo" (Preserve Vector Data on)
                ToolbarItem(placement: .principal) { HStack(spacing: 8) { Image("BrandLogo").resizable().scaledToFit().frame(height: 22); Text("Jupiter Admin Kit").font(JupiterAdminKitType.display(17)) } }
                ToolbarItem(placement: .topBarTrailing) { Button { } label: { Image(systemName: "plus") } }
            }
        }
    }
}
